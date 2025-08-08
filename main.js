import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Relevant variables
const MOVE_SPEED = 40;    // units per second
const ROT_SPEED  = 1.8;   // radians per second
let prevT = 0; // is just a variable to remember the previous frame’s timestamp in the render loop. We then use dt to make movement frame-rate independent: If your FPS drops, the ship still moves the same distance per second because movement speed is multiplied by dt.
let lastPos = null; // THREE.Vector3
let speedUnitsPerSec = 0; // in "scene units / s" (your units = thousand km)
const _tmpShipCenter = new THREE.Vector3();
const _tmpSunCenter  = new THREE.Vector3();

// sizes in 1,000 km
// Sun
const sunRadius = 1392 / 2;

// Earth
const earthRadius = 12.756 / 2;
const distanceFromSun = 1.496 * Math.pow(10, 5);

// Earth's moon
const earthMoonRadius = 3.476 / 2;
const earthMoonDistanceFromEarth = 384.4;

// colors
const black = "#030303";
const white = 0xFFFFFF;
const spaceBackground = black;

// spaceShip
const spaceShipScale = 0.0000001; // Scale factor for the spaceship model
const spaceShipCameraPositionScale = 2 * spaceShipScale; // Scale factor for the spaceship camera position
const spaceShipStartingPosition = new THREE.Vector3(0, 0, distanceFromSun + 10); // Start the spaceship a bit away from the Earth

// Spaceship animation controls
const MAX_BANK  = 0.35; // radians for left/right bank (roll)
const MAX_PITCH = 0.20; // radians for nose up/down
const TILT_SPRING = 5; // higher = snappier return

// Options
const options = {
  addStars: true, // Add stars background
}

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
  const vertices = [];
  for (let i = 0; i < 1000; i++) {
    vertices.push(
      THREE.MathUtils.randFloatSpread(Math.pow(10, 12), Math.pow(10, 13)),
      THREE.MathUtils.randFloatSpread(Math.pow(10, 12), Math.pow(10, 13)),
      THREE.MathUtils.randFloatSpread(Math.pow(10, 12), Math.pow(10, 13))
    );
  }
  const textureLoader = new THREE.TextureLoader();
  const starTexture = textureLoader.load('white-circle.png');
  const starGeometry = new THREE.BufferGeometry();
  starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  const starMaterial = new THREE.PointsMaterial({ map: starTexture, size: 0.5 });
  const stars = new THREE.Points(starGeometry, starMaterial);
  const starsLights = new THREE.PointLight(white, 0.5, Math.pow(10, 15));

  if (options.addStars) scene.add(stars);

  // ☀️ Solar system root
  const solarSystem = new THREE.Object3D();
  scene.add(solarSystem);

  const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);

  // ☀️ Sun
  let sunMesh;
  textureLoader.load('sun-texture.jpg', (texture) => {
    const sunGeometry = new THREE.SphereGeometry(sunRadius, 64, 64);
    const sunMaterial = new THREE.MeshPhongMaterial({ 
      map: texture,
      emissive: new THREE.Color(0xffffaa), // warm yellow glow
      emissiveIntensity: 2,
      emissiveMap: texture, });
    sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
    // sunMesh.scale.set(sunRadius, sunRadius, sunRadius);
    solarSystem.add(sunMesh);
  });


  const sunLight = new THREE.PointLight(0xFFFFFF, Math.pow(10, 11), Math.pow(10, 15));
  sunLight.position.set(0, 0, 0);
  scene.add(sunLight);

  // 🌍 Earth
  const earthOrbit = new THREE.Object3D();
  solarSystem.add(earthOrbit);
  let earthMesh;
  textureLoader.load('earth-texture.jpg', (texture) => {
    const earthGeometry = new THREE.SphereGeometry(earthRadius, 64, 64);
    const material = new THREE.MeshPhongMaterial({ 
      map: texture,
      emissive: new THREE.Color(0xffffaa), // warm yellow glow
      emissiveIntensity: 0.01,
      emissiveMap: texture });
    earthMesh = new THREE.Mesh(earthGeometry, material);
    // earthMesh.scale.set(2, 2, 2);
    earthMesh.position.set(0, 0, distanceFromSun);
    earthOrbit.add(earthMesh);
  });

  // 🌕 Moon
  const moonOrbit = new THREE.Object3D();
  moonOrbit.position.set(0, 0, distanceFromSun);
  earthOrbit.add(moonOrbit);
  let moonMesh;
  textureLoader.load('moon-texture.jpg', (texture) => {
    const material = new THREE.MeshPhongMaterial({ map: texture,
      emissive: new THREE.Color('#ffffaa'), // warm yellow glow
      emissiveIntensity: 0.1,
      emissiveMap: texture, });
    const moonGeometry = new THREE.SphereGeometry(earthMoonRadius, 64, 64);
    moonMesh = new THREE.Mesh(moonGeometry, material);
    moonMesh.scale.set(0.5, 0.5, 0.5);
    moonMesh.position.set(0, 0, earthMoonDistanceFromEarth);
    moonOrbit.add(moonMesh);
  });

  // 🔴 Mars
  const marsOrbit = new THREE.Object3D();
  solarSystem.add(marsOrbit);
  let marsMesh;
  textureLoader.load('mars-texture.jpg', (texture) => {
    const material = new THREE.MeshPhongMaterial({ map: texture, shininess: 100 });
    marsMesh = new THREE.Mesh(sphereGeometry, material);
    marsMesh.scale.set(1.5, 1.5, 1.5);
    marsMesh.position.set(60, 0, 0);
    marsOrbit.add(marsMesh);
  });

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
  const spaceShipCamera = new THREE.PerspectiveCamera(75, 2, Math.pow(10, -15), Math.pow(10, 8));
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

    earthOrbit.rotation.y = time * 0.00001;
    moonOrbit.rotation.y = time * 0.00001;
    marsOrbit.rotation.y = time * 0.15;

    if (sunMesh) sunMesh.rotation.y = time * 0.5;
    if (earthMesh) earthMesh.rotation.y = time * 0.0001;
    if (marsMesh) marsMesh.rotation.y = time * 0.8;
    if (moonMesh) moonMesh.rotation.y = time * 0.8;

    // --- spaceship controls (simultaneous keys) ---
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
      if (dt > 0) speedUnitsPerSec = frameDist / dt;      // units per second
      lastPos.copy(currPos);

      // distance to Sun (origin)
      shipVisual.getWorldPosition(_tmpShipCenter);
      sunMesh.getWorldPosition(_tmpSunCenter);
      const distUnits = _tmpShipCenter.distanceTo(_tmpSunCenter); // because Sun is at (0,0,0)

      // update HUD (units=thousand km -> label as kkm)
      if (hudSpeedEl) hudSpeedEl.textContent = speedUnitsPerSec.toFixed(2);
      if (hudDistEl)  hudDistEl.textContent  = distUnits.toFixed(0);

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