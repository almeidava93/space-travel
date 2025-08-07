import * as THREE from 'three';

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


function createCube({side, material}) {
  const geometry = new THREE.BoxGeometry(side, side, side);
  return new THREE.Mesh(geometry, material);
}

function addObjectToScene(x, y, obj, scene) {
  obj.position.x = x * spread;
  obj.position.y = y * spread;
 
  scene.add(obj);
  objects.push(obj);
}


function main() {
    // select the canvas element
    const canvas = document.querySelector('#c');

    // create a renderer, which renders the scene in the canvas
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

    // create a camera, which defines the view of the scene
    // frustum: the name of a 3d shape that is like a pyramid with the tip sliced off.
    // See: https://threejs.org/manual/resources/frustum-3d.svg
    const fov = 75; // field of view in degrees with respect to the vertical axis
    const aspect = 2;  // display aspect of the canvas, e.g., 300x150px has aspect of 2
    const near = 0.1; // space between the camera and the near clipping plane
    const far = 1000; // space between the camera and the far clipping plane
    // anything before or after the near or far clipping plane will not be rendered
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

    // position the camera up in the z axis to see scene from above
    {
      camera.position.z = 120;
      camera.position.x = 0;
      camera.position.y = 0;
    }

    // create a scene. Everything that is rendered must be added to a scene
    const scene = new THREE.Scene();

    // style the scene background
    scene.background = new THREE.Color('#141414');

    // create a material for the cube
    // const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 }); // not affected by lights
    const material = new THREE.MeshPhongMaterial({  // type of material that isaffected by lights
      color: 0x44aa88,
      side: THREE.DoubleSide, // This tells three to draw both sides of the triangles that make up a shape. Things like the PlaneGeometry and the ShapeGeometry which are 2 dimensional and so have no inside. Without setting side: THREE.DoubleSide they would disappear when looking at their back sides. IMPACTS PERFORMANCE, so use with caution.
    });
    
    // create a mesh, which is a combination of geometry and material
    const cube = createCube({side: 20, material}); 

    // add the mesh to the scene
    scene.add(cube);

    // Example of cube with points material
    
    // material
    const pointsMaterial = new THREE.PointsMaterial({
      color: '#BA8E84',
      size: 1, // size of each point
    });

    // geometry
    const cubeGeometry = new THREE.BoxGeometry(20, 20, 20);

    const pointsCube = new THREE.Points(cubeGeometry, pointsMaterial);
    pointsCube.position.x = 40;
    scene.add(pointsCube);

    {
      const vertices = [];

      for ( let i = 0; i < 10000; i ++ ) {
        const x = THREE.MathUtils.randFloatSpread( 2000 );
        const y = THREE.MathUtils.randFloatSpread( 2000 );
        const z = THREE.MathUtils.randFloatSpread( 2000 );

        vertices.push( x, y, z );
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
      const material = new THREE.PointsMaterial( { color: 0x888888 } );
      const points = new THREE.Points( geometry, material );
      scene.add( points );

    }

    // add a light to the scene
    // Directional lights have a position and a target. Both default to 0, 0, 0. In our case we're setting the light's position to -1, 2, 4 so it's slightly on the left, above, and behind our camera. The target is still 0, 0, 0 so it will shine toward the origin.
    const color = 0xFFFFFF;
    const intensity = 3;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);

    

    // We can then render the scene by calling the renderer's render function and passing it the scene and the camera
    function render(time) {
        time *= 0.001;  // convert milliseconds to seconds

        // Make the page responsive
        // First, resolve the stretching of the canvas problem
        // 1. Set camera aspect ratio to match the canvas
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        // 2. Call camera update projection matrix
        camera.updateProjectionMatrix(); // Needs to be applied every time the aspect ratio changes
        
        // Second, adjust the number of pixels in the canvas to preserve resolution
        if (resizeRendererToDisplaySize(renderer)) {
          camera.aspect = canvas.clientWidth / canvas.clientHeight;
          camera.updateProjectionMatrix();
        }

        cube.rotation.x = time * 0.2; // rotations are in radians, one complete rotation is 2 * Math.PI radians, about 6.28 seconds from page load
        cube.rotation.y = time * 0.5;

        pointsCube.rotation.x = time * 0.2;
        pointsCube.rotation.y = time * 0.5;
        
        renderer.render(scene, camera);
        
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render); // requestAnimationFrame passes the time since the page loaded to our function in milliseconds
}

function solarSystemScene() {
    // select the canvas element
    const canvas = document.querySelector('#c');

    // create a renderer, which renders the scene in the canvas
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

    // create a camera, which defines the view of the scene
    // frustum: the name of a 3d shape that is like a pyramid with the tip sliced off.
    // See: https://threejs.org/manual/resources/frustum-3d.svg
    const fov = 75; // field of view in degrees with respect to the vertical axis
    const aspect = 2;  // display aspect of the canvas, e.g., 300x150px has aspect of 2
    const near = 0.1; // space between the camera and the near clipping plane
    const far = 3000; // space between the camera and the far clipping plane
    // anything before or after the near or far clipping plane will not be rendered
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

    // position the camera up in the z axis to see scene from above
    {
      camera.position.z = 120;
      camera.position.x = 80;
      camera.position.y = 80;
      camera.lookAt(0, 0, 0); // make the camera look at the origin
    }

    // create a scene. Everything that is rendered must be added to a scene
    const scene = new THREE.Scene();

    // style the scene background
    scene.background = new THREE.Color('#000000');

    // add starts to the background
    const vertices = [];

    for ( let i = 0; i < 10000; i ++ ) {
      const x = THREE.MathUtils.randFloatSpread( 4000, 6000 );
      const y = THREE.MathUtils.randFloatSpread( 4000, 6000 );
      const z = THREE.MathUtils.randFloatSpread( 4000, 6000 );

      vertices.push( x, y, z );
    }

    const textureLoader = new THREE.TextureLoader();
    const circleTexture = textureLoader.load('white-circle.png');

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
    const material = new THREE.PointsMaterial( { map: circleTexture, size:0.5} );
    const stars = new THREE.Points( geometry, material );
    scene.add( stars );

    // Include the solar system objects
    const solarSystemObjects = []

    // use just one sphere for everything
    const radius = 1;
    const widthSegments = 32;
    const heightSegments = 32;
    const sphereGeometry = new THREE.SphereGeometry(
        radius, widthSegments, heightSegments);

    // create scene graph node for the solar system and add to the scene
    const solarSystem = new THREE.Object3D();
    scene.add(solarSystem);
    solarSystemObjects.push(solarSystem);
    
    // create the sun
    const sunTextureLoader = new THREE.TextureLoader();
    sunTextureLoader.load('sun-texture.jpg', (texture) => {
      const sunMaterial = new THREE.MeshBasicMaterial({map: texture});
      const sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial);
      sunMesh.scale.set(5, 5, 5);  // make the sun large
      solarSystem.add(sunMesh);
      solarSystemObjects.push(sunMesh);

      // animate the sun to rotate
      function render(time) {
          time *= 0.001;  // convert milliseconds to seconds
          renderer.render(scene, camera);
          sunMesh.rotation.y = time * 0.1; // rotate the sun
          requestAnimationFrame(render);
      }
      requestAnimationFrame(render);
    })

    {
      const color = 0xFFFFFF;
      const intensity = 5000;
      const light = new THREE.PointLight(color, intensity);
      scene.add(light);
    }

    // create the earth
    {
      const textureLoader = new THREE.TextureLoader();
      textureLoader.load('earth-texture.jpg', (texture) => {
        const sunMaterial = new THREE.MeshPhongMaterial({map: texture, shininess: 100});
        const earthMesh = new THREE.Mesh(sphereGeometry, sunMaterial);
        earthMesh.scale.set(2, 2, 2);  // make the sun large
        earthMesh.position.set(60, 0, 0); // position the earth at a distance from the sun
        solarSystem.add(earthMesh);
        solarSystemObjects.push(earthMesh);

        // animate the sun to rotate
        function render(time) {
            time *= 0.001;  // convert milliseconds to seconds
            renderer.render(scene, camera);
            earthMesh.rotation.y = time * 0.5; // rotate the sun
            requestAnimationFrame(render);
        }
        requestAnimationFrame(render);
      })
    }

    // We can then render the scene by calling the renderer's render function and passing it the scene and the camera
    function render(time) {
        time *= 0.001;  // convert milliseconds to seconds

        // Make the page responsive
        // First, resolve the stretching of the canvas problem
        // 1. Set camera aspect ratio to match the canvas
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        // 2. Call camera update projection matrix
        camera.updateProjectionMatrix(); // Needs to be applied every time the aspect ratio changes
        
        // Second, adjust the number of pixels in the canvas to preserve resolution
        if (resizeRendererToDisplaySize(renderer)) {
          camera.aspect = canvas.clientWidth / canvas.clientHeight;
          camera.updateProjectionMatrix();
        }



        stars.rotation.x = time * 0.002; // rotations are in radians, one complete rotation is 2 * Math.PI radians, about 6.28 seconds from page load
        stars.rotation.y = time * 0.002;

        solarSystemObjects.forEach((obj) => {
          obj.rotation.y = time*0.5;
        });
        
        renderer.render(scene, camera);
        
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render); // requestAnimationFrame passes the time since the page loaded to our function in milliseconds
}


solarSystemScene();



// main();

