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
const mapSize = Math.pow(10, 11); // adjust for your scale

// Planet class to work with the solar system
class SphericalAstronomicalObject {
  constructor({name, radius = null, diameter = null, distanceFromOrbitCenter, texturePath, normalMapPath = null, specularMapPath = null, emissiveMapPath = null, otherMaterialProps = {}, numberOfSegments = 64, orbitRotationSpeed = 0.00001, selfRotationSpeed = 0.1, orbitalPeriod = 1}) {

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
    this.orbitalPeriod = orbitalPeriod;
    this.orbitRotationSpeed = Math.PI * 2 / (orbitalPeriod * 365 * 24 * 60 * 60); // radians per second

    // create self rotation
    this.selfRotationSpeed = selfRotationSpeed;

  }
}

class Spaceship {
  constructor({
    scale = 0.01,
    maxSpeed = 299_792_458, // meters per second, speed of light
    currentSpeed = 0, // units per second
    spaceShipMeshPath = 'space-ship/scene.gltf',
    acceleration = 1, // meters per second squared
    maxAcceleration = 10_000_000, // meters per second squared
    baseAccelerationIncrease = 1_000_000, // proportion of increment per second
    rotationSpeed = 1.5, // radians per second
    breakStrength = 0.5, // units per second squared
    spaceshipStartingPosition = new THREE.Vector3(
      -6000000, 
      0, 
      planetsData[sceneConfig.spaceShipStartingPosition].distanceFromOrbitCenter * Math.pow(10, 6) + planetsData[sceneConfig.spaceShipStartingPosition].diameter * Math.pow(10, 6)
    ), // Start the spaceship a bit away from the chosen planet in the config file

    // camera parameters
    fov = 75,
    near = 0.001,
    far = Math.pow(10, 15),
    aspect = 2,

    // spaceship animation params
    maxBank = 0.35, // radians for left/right bank (roll)
    maxPitch = 0.35, // radians for nose up/down
    tiltSpring = 5, // higher = snappier return

  } = {}) {
    // save relevant spaceship params
    this.status = 'loading';
    this.maxSpeed = maxSpeed;
    this.currentSpeed = currentSpeed;
    this.acceleration = acceleration;
    this.maxAcceleration = maxAcceleration;
    this.baseAccelerationIncrease = baseAccelerationIncrease;
    this.breakStrength = breakStrength;
    this.rotationSpeed = rotationSpeed;
    this.spaceshipStartingPosition = spaceshipStartingPosition;
    this.pivot = new THREE.Object3D();
    this.centeredMesh = new THREE.Object3D();

    // load spaceship model
    const loader = new GLTFLoader(); 
    // const spaceshipGltfModel = loader.load(spaceShipMeshPath);

    loader.load(spaceShipMeshPath, (spaceshipGltfModel) => {
      this.mesh = spaceshipGltfModel.scene;
      this.mesh.scale.set(scale, scale, scale);
      this.mesh.position.set(0, 0, 0);
      this.mesh.rotation.set(0.2, 0, -0.3); // Adjust rotation to face forward
  
      // Create a pivot and put the ship under it
      this.centeredMesh.add(this.mesh);
      this.pivot.add(this.centeredMesh); // this adds the centered spaceship mesh to the pivot at the origin
  
      // Make sure transforms are current before measuring
      this.mesh.updateWorldMatrix(true, true);
  
      // Position the center of the spaceship mesh at the center of the pivot
      // 1. Get bounding box
      const bbox = new THREE.Box3().setFromObject(this.mesh);
      // 2. Get center of the bounding box
      const center = bbox.getCenter(new THREE.Vector3());
      // 3. Reposition the mesh towards the center of the pivot
      this.mesh.position.sub(center);
      // Now the pivot can be manipulated to move the spaceship around

      // Set the initial position of the spaceship
      this.pivot.position.set(spaceshipStartingPosition.x, spaceshipStartingPosition.y, spaceshipStartingPosition.z);
      this.pivot.lookAt(0, 0, 0); // look at the sun
  
      // Create a camera that follows the spaceship
      this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
      this.camera.position.set(0.3, 1, -5); // this position is slightly above and behind the spaceship
      this.camera.position.multiplyScalar(scale * 2); // scale the camera position to match the size of the spaceship
      this.camera.lookAt(0, 0, 0); // look at the origin of the space it is
      this.pivot.add(this.camera); // add the camera to the pivot, this will make it follow the center of the spaceship
  
      // spaceship animation params
      this.maxBank = maxBank; // radians for left/right bank (roll)
      this.maxPitch = maxPitch; // radians for nose up/down
      this.tiltSpring = tiltSpring; // higher = snappier return, how quickly to converge to the target pose of the ship

      this.status = 'ready';

      this.mesh.emissive = new THREE.Color('#d81212ff');
      this.mesh.emissiveIntensity = 1;
      
    });
  }

  addAxes(spaceshipAxes = true, pivotAxes = true) {
    // add axes to the spaceship
    if (spaceshipAxes) {
      const axesSpaceshipMesh = new THREE.AxesHelper(2);
      axesSpaceshipMesh.material.depthTest = false;
      axesSpaceshipMesh.renderOrder = 1;
      this.mesh.add(axesSpaceshipMesh);
    }

    // add axes to the pivot
    if (pivotAxes) {
      const axesPivotMesh = new THREE.AxesHelper(2);
      axesPivotMesh.material.depthTest = false;
      axesPivotMesh.renderOrder = 1;
      this.pivot.add(axesPivotMesh);
    }
  }

  lookAt(target) {
    this.pivot.lookAt(target);
  }

  moveTo(target) {
    const newPosition = new THREE.Vector3(
      -6000000, 
      0, 
      planetsData[target].distanceFromOrbitCenter * Math.pow(10, 6) + planetsData[target].diameter * Math.pow(10, 6)
    )

    this.pivot.position.set(newPosition.x, newPosition.y, newPosition.z);
    this.pivot.lookAt(0, 0, 0); // look at the sun
    
  }

}

// Initialize objects
const PLANETS = {};
const MOONS = {};
const spaceshipObject = new Spaceship();

// Relevant variables
const ROT_SPEED  = 1.5;   // radians per second
let prevT = 0; // is just a variable to remember the previous frame’s timestamp in the render loop. We then use dt to make movement frame-rate independent: If your FPS drops, the ship still moves the same distance per second because movement speed is multiplied by dt.
let lastPos = null; // THREE.Vector3
const _tmpShipCenter = new THREE.Vector3();
const _tmpSunCenter  = new THREE.Vector3();
const _tmpMarsCenter  = new THREE.Vector3();
const _tmpMercuryCenter  = new THREE.Vector3();
const _tmpEarthMoonCenter  = new THREE.Vector3();

// Define background color
const spaceBackground = sceneConfig.colors[sceneConfig.spaceBackground];

// Listen to key events
const keys = new Set();
window.addEventListener('keydown', (e) => {
  // prevent page scrolling with arrows/space. Calling e.preventDefault() stops the browser’s default action, so your spaceship control logic isn’t interrupted by the page scrolling or focus jumping.
  if (["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key)) e.preventDefault();
  keys.add(e.code);     // use code: "KeyW", "ArrowUp" etc.
});
window.addEventListener('keyup',   (e) => keys.delete(e.code));

const select = document.getElementById('solar-body');
select.addEventListener('change', () => {
  spaceshipObject.moveTo(select.value);
});


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

  // 🛸 Spaceship
  solarSystem.add(spaceshipObject.pivot);

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

  // --- Minimap markers ---
  const planetMarkers = {};
  const moonMarkers   = {};
  let shipMarker = null;

  // Reuse your star texture as a dot
  const markerTexture = textureLoader.load('white-circle.png');
  // Marker size in world units (adjust with mapSize)
  const markerWorldSize = mapSize * 0.04;

  function makeMarker(color = 0xffffff) {
    const mat = new THREE.SpriteMaterial({
      map: markerTexture,
      color,
      depthTest: false,
      depthWrite: false,
      transparent: true,
      opacity: 0.95,
    });
    const spr = new THREE.Sprite(mat);
    spr.layers.set(1);           // <- only show on minimap
    spr.scale.setScalar(markerWorldSize);
    scene.add(spr);
    return spr;
  }

  // Add a marker for each planet
  const _wp = new THREE.Vector3();
  Object.entries(PLANETS).forEach(([key, p]) => {
    const color =
      key === 'sun'   ? 0xffcc00 :
      key === 'earth' ? 0x55aaff :
      key === 'mars'  ? 0xff6644 :
      0xffffff;

    const spr = makeMarker(color);
    p.mesh.getWorldPosition(_wp);
    spr.position.copy(_wp);

    planetMarkers[key] = spr;          // store by the SAME key we’ll use later
  });

  // Add a marker for each moon + initial position
  Object.entries(MOONS).forEach(([key, m]) => {
    const spr = makeMarker(0xaaaaaa);
    m.mesh.getWorldPosition(_wp);
    spr.position.copy(_wp);
    moonMarkers[key] = spr;
  });

  // Ship marker initial position (exists even before GLTF)
  shipMarker = makeMarker(0x00ff88);
  spaceshipObject.pivot.getWorldPosition(_wp);
  shipMarker.position.copy(_wp);

  // Minimap camera (top-down orthographic)
  const minimapCamera = new THREE.OrthographicCamera(
    -mapSize, mapSize, mapSize, -mapSize, 1, 1e15
  );
  minimapCamera.up.set(0, 0, -1); // make Z face downward
  minimapCamera.lookAt(new THREE.Vector3(0, -1, 0));
  // after creating minimapCamera
  minimapCamera.layers.set(1);

  const minimapRenderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('minimap'),
    alpha: true
  });
  minimapRenderer.setSize(200, 200); // match CSS size
  
  // put near your minimap setup
  minimapRenderer.setPixelRatio(window.devicePixelRatio); // crisp dots
  const DOT_PX = 8;

  function updateMarkerScreenSize() {
    // actual drawing buffer size in *physical* pixels
    const buf = minimapRenderer.getDrawingBufferSize(new THREE.Vector2());
    const worldPerPixel = (2 * mapSize) / buf.y; // top-bottom divided by pixel height
    const s = DOT_PX * worldPerPixel;
    // scale all markers to constant on-screen size
    Object.values(planetMarkers).forEach(m => m.scale.setScalar(s));
    Object.values(moonMarkers).forEach(m => m.scale.setScalar(s));
    if (shipMarker) shipMarker.scale.setScalar(s);
  }

  // Keep a handle to the loaded mesh and its base rotation
  let shipVisual = spaceshipObject.centeredMesh;
  let shipBaseRot = new THREE.Euler();
  shipBaseRot.copy(spaceshipObject.centeredMesh.rotation);

  // 🎥 Render loop
  function render(time) {
    // wait for space ship to be loaded
    if (spaceshipObject.status !== 'ready') return requestAnimationFrame(render);

    time *= 0.001; // convert to seconds
    const dt = Math.min(0.05, time - prevT); // clamp for stability
    prevT = time;

    if (resizeRendererToDisplaySize(renderer)) {
      spaceshipObject.camera.aspect = canvas.clientWidth / canvas.clientHeight;
      spaceshipObject.camera.updateProjectionMatrix();
    }

    // Add movement to orbits and self-rotation
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

    if (sunObject.mesh) sunObject.mesh.rotation.y = time * 0.1;


    // spaceship controls (simultaneous keys)
    if (spaceshipObject.pivot) {

      // directions in world space
      const forward = spaceshipObject.pivot.getWorldDirection(
        new THREE.Vector3()
      ).normalize(); // normalization means getting a vector of length 1 (unit vector)
      const up = new THREE.Vector3(0, 1, 0);

      // translation (W/S or ArrowUp/Down), strafe (A/D), vertical (R/F)
      const move = new THREE.Vector3();
      move.add(forward);
      if (keys.has("KeyW") || keys.has("ArrowUp")) {
        // update spaceship speed
        if (spaceshipObject.currentSpeed < spaceshipObject.maxSpeed) {
          // update acceleration
          spaceshipObject.acceleration = Math.min(spaceshipObject.acceleration + spaceshipObject.baseAccelerationIncrease * dt, spaceshipObject.maxAcceleration);
          spaceshipObject.currentSpeed += spaceshipObject.acceleration * dt;
        }
      };    
      if (keys.has("KeyS") || keys.has("ArrowDown")) {
        spaceshipObject.acceleration = 0;
        // update spaceship speed
        if (spaceshipObject.currentSpeed > 0) {
          // update speed
          spaceshipObject.currentSpeed *= (1 - spaceshipObject.breakStrength * dt) ;
        }
      };
      if (keys.has("KeyR"))                           move.add(up);
      if (keys.has("KeyF"))                           move.addScaledVector(up, -1);

      if (move.lengthSq() > 0) {
        move.normalize().multiplyScalar(spaceshipObject.currentSpeed * dt);
        spaceshipObject.pivot.position.add(move);
      }

      console.log('Velocity',  spaceshipObject.currentSpeed);
      console.log('Acceleration',  spaceshipObject.acceleration);

      // rotation: yaw (Left/Right)
      const yaw   = (keys.has("ArrowLeft") | keys.has("KeyA") ? 1 : 0) - (keys.has("ArrowRight") | keys.has("KeyD") ? 1 : 0);
      if (yaw)   spaceshipObject.pivot.rotateOnWorldAxis(up, yaw * ROT_SPEED * dt);

    }

    if (shipVisual) {

      // make sure world matrices are up to date
      scene.updateMatrixWorld(true);
      // update speedometer and distance overlay
      if (!lastPos) lastPos = spaceshipObject.pivot.position.clone();
      const currPos = spaceshipObject.pivot.position;
      const frameDist = currPos.distanceTo(lastPos);      // units moved this frame
      if (dt > 0) spaceshipObject.speedUnitsPerSec = frameDist / (dt * 1000);      // units per second
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
      if (hudSpeedEl) hudSpeedEl.textContent = spaceshipObject.speedUnitsPerSec.toFixed(2);
      if (hudDistEl)  hudDistEl.textContent  = distUnits.toFixed(0);
      if (hudDistMarsEl)  hudDistMarsEl.textContent  = distToMars.toFixed(0);
      if (hudDistMercuryEl)  hudDistMercuryEl.textContent  = distToMercury.toFixed(0);
      if (hudDistEarthMoonEl)  hudDistEarthMoonEl.textContent  = distToEarthMoon.toFixed(0);

      const upKey   = keys.has("KeyR");
      const downKey = keys.has("KeyF");
      const left  = keys.has("ArrowLeft") | keys.has("KeyA");
      const right = keys.has("ArrowRight") | keys.has("KeyD");

      const targetRoll  = (Number(right) - Number(left)) * spaceshipObject.maxBank;              // bank right/left
      const targetPitch = (Number(downKey) - Number(upKey)) * spaceshipObject.maxPitch;          // nose up/down

      // smooth approach to target (springy lerp) - how quickly to converge
      const k = Math.min(1, spaceshipObject.tiltSpring * dt);
      shipVisual.rotation.x += (shipBaseRot.x + targetPitch - shipVisual.rotation.x) * k;
      shipVisual.rotation.z += (shipBaseRot.z + targetRoll  - shipVisual.rotation.z) * k;
      // keep y from base so yaw visuals don’t accumulate
      shipVisual.rotation.y = shipBaseRot.y;
    }
    renderer.render(scene, spaceshipObject.camera);

    // minimap
    // update marker positions
    const _tmp = new THREE.Vector3();

    for (const [key, p] of Object.entries(PLANETS)) {
      const spr = planetMarkers[key];
      if (!spr) continue;
      p.mesh.getWorldPosition(_tmp);
      spr.position.copy(_tmp);
    }

    for (const [key, m] of Object.entries(MOONS)) {
      const spr = moonMarkers[key];
      if (!spr) continue;
      m.mesh.getWorldPosition(_tmp);
      spr.position.copy(_tmp);
    }

    // Ship: use spaceShipSpace (exists even if GLTF not loaded yet)
    if (shipMarker) {
      spaceshipObject.pivot.getWorldPosition(_tmp);
      shipMarker.position.copy(_tmp);
    }

    // Keep minimap centered on the ship (top-down)
    if (spaceshipObject.pivot) {
      spaceshipObject.pivot.getWorldPosition(shipMarker.position);
      minimapCamera.position.set(shipMarker.position.x, shipMarker.position.y + mapSize, shipMarker.position.z);
      minimapCamera.lookAt(shipMarker.position);
    }

    // Render minimap
    updateMarkerScreenSize();
    minimapRenderer.render(scene, minimapCamera);

    // recursion
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

solarSystemScene();