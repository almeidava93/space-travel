import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';




// Relevant variables

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
const spaceShipScale = 0.05; // Scale factor for the spaceship model
const spaceShipStartingPosition = new THREE.Vector3(0, 0, distanceFromSun + 10); // Start the spaceship a bit away from the Earth

// Options
const options = {
  addStars: false, // Add stars background
}

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
  loader.load('space-ship/scene.gltf', (gltf) => {
    const spaceshipMesh = gltf.scene;
    spaceshipMesh.scale.set(0.05, 0.05, 0.05);
    spaceshipMesh.rotation.set(0.2, 0, -0.3); // Adjust rotation to face forward

    // Centering
    const bbox = new THREE.Box3().setFromObject(spaceshipMesh);
    const center = new THREE.Vector3();
    bbox.getCenter(center);
    spaceshipMesh.position.sub(center); // Center the model

    // Wrapper
    centeredWrapper.add(spaceshipMesh);
    spaceShipSpace.add(centeredWrapper);

    // Add axis to visualize orientation
    const axes = new THREE.AxesHelper(2);
    axes.material.depthTest = false;
    axes.renderOrder = 1;
    // centeredWrapper.add(axes);

    centeredWrapper.lookAt(new THREE.Vector3(0, 0, 0));
  });
  

  // Space ship camera
  const spaceShipCamera = new THREE.PerspectiveCamera(75, 2, 0.1, Math.pow(10, 8));
  spaceShipCamera.position.set(0.3, 1, -5).multiplyScalar(spaceShipScale * 2);
  spaceShipCamera.rotation.x = 0.5;
  spaceShipCamera.lookAt(0, 0, 0);
  centeredWrapper.add(spaceShipCamera);

  // 🕹 Controls
  window.addEventListener('keydown', (e) => {
    if (!centeredWrapper) return;

    switch (e.key) {
      case 'ArrowUp': {
        const dir = new THREE.Vector3();
        centeredWrapper.getWorldDirection(dir);
        centeredWrapper.position.addScaledVector(dir, 10);
        break;
      }
      case 'ArrowDown':{
        const dir = new THREE.Vector3();
        centeredWrapper.getWorldDirection(dir);
        centeredWrapper.position.addScaledVector(dir, -10);
        break;
      }
      case 'ArrowLeft':
        centeredWrapper.rotation.y -= 0.03;
        break;
      case 'ArrowRight':
        centeredWrapper.rotation.y += 0.03;
        break;
      case 'w':
        camera.position.z -= 0.1;
        break;
      case 's':
        camera.position.z += 0.1;
        break;
      case 'a':
        camera.position.x -= 0.1;
        break;
      case 'd':
        camera.position.x += 0.1;
        break;
      case 'r':
        camera.position.y += 0.1;
        break;
      case 'f':
        camera.position.y -= 0.1;
        break;
    }
  });

  // 🎥 Render loop
  function render(time) {
    time *= 0.001;

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

    renderer.render(scene, spaceShipCamera);
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

solarSystemScene();