import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import toml from 'toml';

async function loadTOML(path) {
  const response = await fetch(path);
  const text = await response.text();
  return toml.parse(text);
}

const sceneConfig = await loadTOML('sceneConfig.toml');
const planetsData = sceneConfig.planets;
const moonsData = sceneConfig.moons;
console.log(planetsData);
console.log(moonsData);

// Planet class to work with the solar system
class SphericalAstronomicalObject {
  constructor({name, radius = null, diameter = null, distanceFromOrbitCenter, texturePath, normalMapPath = null, specularMapPath = null, emissiveMapPath = null, otherMaterialProps = {}, numberOfSegments = 64, orbitRotationSpeed = 0.00001, selfRotationSpeed = 0.1}) {

    if (radius) {
      this.radius = radius;
    } else if (diameter) {
      this.radius = Math.pow(10, 6) * diameter / 2;
    }

    this.name = name;
    this.distanceFromOrbitCenter = Math.pow(10, 6) * distanceFromOrbitCenter; // in meters

    // Load textures and maps
    const textureLoader = new THREE.TextureLoader();
    this.texture = textureLoader.load(texturePath);
    this.normalMap = normalMapPath ? textureLoader.load(normalMapPath) : null;
    this.specularMap = specularMapPath ? textureLoader.load(specularMapPath) : null;
    this.emissiveMap = emissiveMapPath ? textureLoader.load(emissiveMapPath) : null;

    // Traverse other props to create adequate color objects
    if (otherMaterialProps) {
      Object.keys(otherMaterialProps).forEach(key => {
        if (typeof otherMaterialProps[key] === 'string' && otherMaterialProps[key].startsWith('#')) {
          otherMaterialProps[key] = new THREE.Color(otherMaterialProps[key]);
        }
      });
    }

    this.material = new THREE.MeshPhongMaterial({
      map: this.texture,
      normalMap: this.normalMap,
      specularMap: this.specularMap,
      emissiveMap: this.emissiveMap,
      ...otherMaterialProps
    });

    this.numberOfSegments = numberOfSegments; // Number of segments for the sphere geometry
    this.geometry = new THREE.SphereGeometry(this.radius, numberOfSegments, numberOfSegments);
    this.mesh = new THREE.Mesh(this.geometry, this.material);

    // set position
    this.mesh.position.set(0, 0, this.distanceFromOrbitCenter);

    // create orbit
    this.orbit = new THREE.Object3D();
    this.orbit.add(this.mesh);
    this.orbitRotationSpeed = orbitRotationSpeed;

    // create self rotation
    this.selfRotationSpeed = selfRotationSpeed;

  }
}

const PLANETS = {};
const MOONS = {};

// Relevant variables
const MOVE_SPEED = 40000000;    // units per second
const ROT_SPEED  = 1.5;   // radians per second
let prevT = 0; // is just a variable to remember the previous frame’s timestamp in the render loop. We then use dt to make movement frame-rate independent: If your FPS drops, the ship still moves the same distance per second because movement speed is multiplied by dt.
let lastPos = null; // THREE.Vector3
let speedUnitsPerSec = 0; // in "scene units / s" (your units = thousand km)
const _tmpShipCenter = new THREE.Vector3();
const _tmpSunCenter  = new THREE.Vector3();
const _tmpMarsCenter  = new THREE.Vector3();
const _tmpMercuryCenter  = new THREE.Vector3();
const _tmpEarthMoonCenter  = new THREE.Vector3();

// Define background color
const spaceBackground = sceneConfig.colors[sceneConfig.spaceBackground];

// spaceShip
const spaceShipScale = 0.01; // Scale factor for the spaceship model
const spaceShipCameraPositionScale = 2 * spaceShipScale; // Scale factor for the spaceship camera position
const spaceShipStartingPosition = new THREE.Vector3(
  -6000000, 
  0, 
  planetsData[sceneConfig.spaceShipStartingPosition].distanceFromOrbitCenter * Math.pow(10, 6) + planetsData[sceneConfig.spaceShipStartingPosition].diameter * Math.pow(10, 6)); // Start the spaceship a bit away from the Earth


// Spaceship animation controls
const MAX_BANK  = 0.35; // radians for left/right bank (roll)
const MAX_PITCH = 0.20; // radians for nose up/down
const TILT_SPRING = 5; // higher = snappier return


// Listen to key events
const keys = new Set();
window.addEventListener('keydown', (e) => {
  // prevent page scrolling with arrows/space. Calling e.preventDefault() stops the browser’s default action, so your spaceship control logic isn’t interrupted by the page scrolling or focus jumping.
  if (["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key)) e.preventDefault();
  keys.add(e.code);     // use code: "KeyW", "ArrowUp" etc.
});
window.addEventListener('keyup',   (e) => keys.delete(e.code));

/**
 * Checks if the renderer's canvas needs resizing to match display size and resizes it if necessary.
 * 
 * The renderer's canvas element can become outdated if the window is resized, or if the canvas is moved to a different
 * location in the DOM. This function checks for those cases and resizes the canvas if necessary.
 * 
 * @param {THREE.WebGLRenderer} renderer - The WebGL renderer whose canvas size is to be checked.
 * @returns {boolean} - Returns true if the canvas was resized, false otherwise.
 */
function resizeRendererToDisplaySize(renderer) {
  // get the canvas element associated with the renderer
  const canvas = renderer.domElement;

  // get the width and height of the canvas's display size, which is the size of the canvas in CSS pixels
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  // check if the canvas needs resizing
  // the canvas needs resizing if its actual width and height do not match the display size
  const needResize = canvas.width !== width || canvas.height !== height;

  // if the canvas needs resizing, resize it
  if (needResize) {
    renderer.setSize(width, height, false);
  }

  // return a boolean indicating whether the canvas was resized
  return needResize;
}

function solarSystemScene() {
  const canvas = document.querySelector('#c');
  const hudSpeedEl = document.getElementById('hud-speed');
  const hudDistEl  = document.getElementById('hud-dist');
  const hudDistMarsEl  = document.getElementById('hud-dist-mars');
  const hudDistMercuryEl  = document.getElementById('hud-dist-mercury');
  const hudDistEarthMoonEl  = document.getElementById('hud-dist-earth-moon');

  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

  const fov = 75;
  const aspect = 2;
  const near = 0.1;
  const far = 3000;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(40, 40, 60);
  camera.lookAt(0, 0, 0);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(spaceBackground);

  // 🌌 Stars background
  
  const textureLoader = new THREE.TextureLoader();
  let stars;
  if (sceneConfig.addStars) {
    const vertices = [];
    for (let i = 0; i < 1000; i++) {
      vertices.push(
        THREE.MathUtils.randFloatSpread(Math.pow(10, 12), Math.pow(10, 13)),
        THREE.MathUtils.randFloatSpread(Math.pow(10, 12), Math.pow(10, 13)),
        THREE.MathUtils.randFloatSpread(Math.pow(10, 12), Math.pow(10, 13))
      );
    }
    const starTexture = textureLoader.load('white-circle.png');
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    const starMaterial = new THREE.PointsMaterial({ map: starTexture, size: 0.5 });
    stars = new THREE.Points(starGeometry, starMaterial);
    // const starsLights = new THREE.PointLight(sceneConfig.colors.white, 0.5, Math.pow(10, 25));
    scene.add(stars);
  }

  // ☀️ Solar system root
  const solarSystem = new THREE.Object3D();
  scene.add(solarSystem);

  // ☀️ Sun
  const sunObject = new SphericalAstronomicalObject(planetsData.sun);
  solarSystem.add(sunObject.mesh);

  // ☀️ Sun light 
  const sunLight = new THREE.PointLight(0xFFFFFF, Math.pow(10, 23), Math.pow(10, 25));
  sunLight.position.set(0, 0, 0);
  scene.add(sunLight);

  // Add planets to the scene
  Object.keys(planetsData).forEach((planetName) => {
    const planetObject = new SphericalAstronomicalObject(planetsData[planetName]);
    solarSystem.add(planetObject.orbit);
    PLANETS[planetName] = planetObject;
  })

  // Add moons to the scene
  Object.keys(moonsData).forEach((moonName) => {
    const moonObject = new SphericalAstronomicalObject(moonsData[moonName]);
    moonObject.orbit.position.set(0, 0, PLANETS[moonsData[moonName].parentPlanet].distanceFromOrbitCenter);
    PLANETS[moonsData[moonName].parentPlanet].orbit.add(moonObject.orbit);
    MOONS[moonName] = moonObject;
  })

  // 🛸 Spaceship
  const spaceShipSpace = new THREE.Object3D();
  spaceShipSpace.position.set(spaceShipStartingPosition.x, spaceShipStartingPosition.y, spaceShipStartingPosition.z);
  solarSystem.add(spaceShipSpace);

  let centeredWrapper = new THREE.Object3D();;

  
  const loader = new GLTFLoader();
  // Keep a handle to the loaded mesh and its base rotation
  let shipVisual = null;
  let shipBaseRot = new THREE.Euler();

  loader.load('space-ship/scene.gltf', (gltf) => {
    const spaceshipMesh = gltf.scene;
    spaceshipMesh.scale.set(spaceShipScale, spaceShipScale, spaceShipScale);
    spaceshipMesh.rotation.set(0.2, 0, -0.3); // Adjust rotation to face forward

    // Create a pivot and put the ship under it
    const pivot = new THREE.Object3D();
    centeredWrapper.add(pivot);
    pivot.add(spaceshipMesh);

    // Make sure transforms are current before measuring
    spaceshipMesh.updateWorldMatrix(true, true);

    // Centering
    const bbox = new THREE.Box3().setFromObject(spaceshipMesh);
    const center = bbox.getCenter(new THREE.Vector3());
    spaceshipMesh.position.sub(center); // Center the model
    spaceshipMesh.updateWorldMatrix(true);
     
    // Add axis to visualize orientation
    const axesSpaceshipMesh = new THREE.AxesHelper(2);
    axesSpaceshipMesh.material.depthTest = false;
    axesSpaceshipMesh.renderOrder = 1;
    // spaceshipMesh.add(axesSpaceshipMesh);
    
    // Add axis to visualize orientation
    const axesPivot = new THREE.AxesHelper(2);
    axesPivot.material.depthTest = false;
    axesPivot.renderOrder = 1;
    // pivot.add(axesPivot);

    // Wrapper
    centeredWrapper.add(pivot);
    spaceShipSpace.add(centeredWrapper);

    // Add axis to visualize orientation
    const axes = new THREE.AxesHelper(2);
    axes.material.depthTest = false;
    axes.renderOrder = 1;
    // centeredWrapper.add(axes);

    shipVisual = pivot;
    shipBaseRot.copy(pivot.rotation);

    centeredWrapper.lookAt(new THREE.Vector3(0, 0, 0));
  });
  
  // Space ship camera
  const spaceShipCamera = new THREE.PerspectiveCamera(75, 2, Math.pow(10, -15), Math.pow(10, 30));
  spaceShipCamera.position.set(0.3, 1, -5).multiplyScalar(spaceShipCameraPositionScale);
  spaceShipCamera.rotation.x = 0.5;
  spaceShipCamera.lookAt(0, 0, 0);
  centeredWrapper.add(spaceShipCamera);

  // 🎥 Render loop
  function render(time) {
    time *= 0.001;
    const dt = Math.min(0.05, time - prevT); // clamp for stability
    prevT = time;

    if (resizeRendererToDisplaySize(renderer)) {
      spaceShipCamera.aspect = canvas.clientWidth / canvas.clientHeight;
      spaceShipCamera.updateProjectionMatrix();
    }

    stars.rotation.x = time * 0.0002;
    stars.rotation.y = time * 0.0002;

    Object.values(PLANETS).forEach((planet) => {
      planet.orbit.rotation.y = time * planet.orbitRotationSpeed;
      if (planet.mesh) planet.mesh.rotation.y = time * planet.selfRotationSpeed;
    })

    Object.values(MOONS).forEach((moon) => {
      moon.orbit.rotation.y = time * moon.orbitRotationSpeed;
      if (moon.mesh) moon.mesh.rotation.y = time * moon.selfRotationSpeed;
    })
    // moonObject.orbit.rotation.y = time * 1;

    if (sunObject.mesh) sunObject.mesh.rotation.y = time * 0.1;
    // if (moonObject.mesh) moonObject.mesh.rotation.y = time * 0.8;

    // spaceship controls (simultaneous keys)
    if (centeredWrapper) {
      // directions in world space
      const forward = new THREE.Vector3();
      centeredWrapper.getWorldDirection(forward).normalize();

      const up = new THREE.Vector3(0, 1, 0);
      const right = new THREE.Vector3().crossVectors(forward, up).normalize();

      // translation (W/S or ArrowUp/Down), strafe (A/D), vertical (R/F)
      const move = new THREE.Vector3();
      if (keys.has("KeyW") || keys.has("ArrowUp"))    move.add(forward);
      if (keys.has("KeyS") || keys.has("ArrowDown"))  move.addScaledVector(forward, -1);
      if (keys.has("KeyD"))                           move.add(right);
      if (keys.has("KeyA"))                           move.addScaledVector(right, -1);
      if (keys.has("KeyR"))                           move.add(up);
      if (keys.has("KeyF"))                           move.addScaledVector(up, -1);

      if (move.lengthSq() > 0) {
        move.normalize().multiplyScalar(MOVE_SPEED * dt);
        centeredWrapper.position.add(move);
      }

      // rotation: yaw (Left/Right), pitch (I/K), roll (Q/E)
      const yaw   = (keys.has("ArrowLeft") ? 1 : 0) - (keys.has("ArrowRight") ? 1 : 0);
      const pitch = (keys.has("KeyI") ? 1 : 0) - (keys.has("KeyK") ? 1 : 0);
      const roll  = (keys.has("KeyE") ? 1 : 0) - (keys.has("KeyQ") ? 1 : 0);

      if (yaw)   centeredWrapper.rotateOnWorldAxis(up, yaw * ROT_SPEED * dt);
      if (pitch) centeredWrapper.rotateX(pitch * ROT_SPEED * dt);
      if (roll)  centeredWrapper.rotateZ(-roll * ROT_SPEED * dt);

      
    }

    if (shipVisual) {

      // make sure world matrices are up to date
      scene.updateMatrixWorld(true);
      // update speedometer and distance overlay
      if (!lastPos) lastPos = centeredWrapper.position.clone();
      const currPos = centeredWrapper.position;
      const frameDist = currPos.distanceTo(lastPos);      // units moved this frame
      if (dt > 0) speedUnitsPerSec = frameDist / (dt * 1000);      // units per second
      lastPos.copy(currPos);

      // distance to Sun (origin)
      shipVisual.getWorldPosition(_tmpShipCenter);
      sunObject.mesh.getWorldPosition(_tmpSunCenter);
      PLANETS.mars.mesh.getWorldPosition(_tmpMarsCenter);
      PLANETS.mercury.mesh.getWorldPosition(_tmpMercuryCenter);
      MOONS.earthMoon.mesh.getWorldPosition(_tmpEarthMoonCenter);
      const distUnits = _tmpShipCenter.distanceTo(_tmpSunCenter) / Math.pow(10, 6); // distance in million km
      const distToMars = _tmpShipCenter.distanceTo(_tmpMarsCenter) / Math.pow(10, 6); // distance in million km
      const distToMercury = _tmpShipCenter.distanceTo(_tmpMercuryCenter) / Math.pow(10, 6); // distance in million km
      const distToEarthMoon = _tmpShipCenter.distanceTo(_tmpEarthMoonCenter) / Math.pow(10, 6); // distance in million km

      // update HUD (units=thousand km -> label as kkm)
      if (hudSpeedEl) hudSpeedEl.textContent = speedUnitsPerSec.toFixed(2);
      if (hudDistEl)  hudDistEl.textContent  = distUnits.toFixed(0);
      if (hudDistMarsEl)  hudDistMarsEl.textContent  = distToMars.toFixed(0);
      if (hudDistMercuryEl)  hudDistMercuryEl.textContent  = distToMercury.toFixed(0);
      if (hudDistEarthMoonEl)  hudDistEarthMoonEl.textContent  = distToEarthMoon.toFixed(0);

      const upKey   = keys.has("KeyR");
      const downKey = keys.has("KeyF");
      const left  = keys.has("ArrowLeft");
      const right = keys.has("ArrowRight");

      const targetRoll  = (Number(right) - Number(left)) * MAX_BANK;              // bank right/left
      const targetPitch = (Number(downKey) - Number(upKey)) * MAX_PITCH;          // nose up/down

      // smooth approach to target (springy lerp)
      const k = Math.min(1, TILT_SPRING * dt);
      shipVisual.rotation.x += (shipBaseRot.x + targetPitch - shipVisual.rotation.x) * k;
      shipVisual.rotation.z += (shipBaseRot.z + targetRoll  - shipVisual.rotation.z) * k;
      // keep y from base so yaw visuals don’t accumulate
      shipVisual.rotation.y = shipBaseRot.y;
    }

    renderer.render(scene, spaceShipCamera);
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

solarSystemScene();