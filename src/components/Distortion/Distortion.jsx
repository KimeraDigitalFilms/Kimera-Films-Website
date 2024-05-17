import React, { useEffect } from "react";
import "./Distortion.css";
import * as THREE from "three";


function Distortion({src,containerId,imageId}) {
  // variables
  let imageContainer = document.getElementById(containerId);
  let imageElement = document.getElementById(imageId);

  let easeFactor = 0.04;
  let scene, camera, renderer, planeMesh;
  let mousePosition = { x: 0.8, y: 0.8 };
  let targetMousePosition = { x: 0.8, y: 0.8 };
  let mouseStopTimeout;
  let aberrationIntensity = 0.0;
  let lastPosition = { x: 0.5, y: 0.5 };
  let prevPosition = { x: 0.8, y: 0.8 };

  // shaders
  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

//OG
// vec2 gridUV = floor(vUv * vec2(20.0, 20.0)) / vec2(20.0, 20.0);
// vec2 centerOfPixel = gridUV + vec2(1.0/20.0, 1.0/20.0);
// vec4 colorR = texture2D(u_texture, uv + vec2(strength * u_aberrationIntensity * 0.01, 0.0));
// vec2 uvOffset = strength * - mouseDirection * 0.2;
//         vec4 colorG = texture2D(u_texture, uv);
//         vec4 colorB = texture2D(u_texture, uv - vec2(strength * u_aberrationIntensity * 0.01, 0.0));

//         gl_FragColor = vec4(colorR.r, colorG.g, colorB.b, 1.0);
  const fragmentShader = `
    varying vec2 vUv;
    uniform sampler2D u_texture;
    uniform vec2 u_mouse;
    uniform vec2 u_prevMouse;
    uniform float u_aberrationIntensity;

    void main() {
      vec2 gridUV = floor(vUv * vec2(8.0, 8.0)) / vec2(8.0, 8.0);
      vec2 centerOfPixel = gridUV + vec2(1.0/8.0, 1.0/8.0);

        vec2 mouseDirection = u_mouse - u_prevMouse;

        vec2 pixelToMouseDirection = centerOfPixel - u_mouse;
        float pixelDistanceToMouse = length(pixelToMouseDirection);
        float strength = smoothstep(0.5, 0.0, pixelDistanceToMouse);

        vec2 uvOffset = strength * - mouseDirection * 0.12;
        vec2 uv = vUv - uvOffset;

        vec4 colorR = texture2D(u_texture, uv + vec2(strength * u_aberrationIntensity * 0.01, 0.0));
        vec4 colorG = texture2D(u_texture, uv);
        vec4 colorB = texture2D(u_texture, uv - vec2(strength * u_aberrationIntensity * 0.01, 0.0));

        gl_FragColor = vec4(colorR.r, colorG.g, colorB.b, 1.0);
    }
`;



scene = new THREE.Scene();

// camera setup
camera = new THREE.PerspectiveCamera(
  80,
  window.innerWidth / window.innerHeight,
  0.01,
  10
);
camera.position.z = 1;
  function initializeScene(texture) {
    //   scene creation
    //   uniforms
    let shaderUniforms = {
      u_mouse: { type: "v2", value: new THREE.Vector2() },
      u_prevMouse: { type: "v2", value: new THREE.Vector2() },
      u_aberrationIntensity: { type: "f", value: 0.0 },
      u_texture: { type: "t", value: texture },
    };

    //   creating a plane mesh with materials
    planeMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(1.7, 1.7),
      new THREE.ShaderMaterial({
        uniforms: shaderUniforms,
        vertexShader,
        fragmentShader,
      })
    );

   

    //   add mesh to scene
    scene.add(planeMesh);

    //   render
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(imageContainer.offsetWidth, imageContainer.offsetHeight);
    //   create a canvas
    imageContainer.appendChild(renderer.domElement);


  }

  function animateScene() {
    requestAnimationFrame(animateScene);

    mousePosition.x += (targetMousePosition.x - mousePosition.x) * easeFactor*1.2;
    mousePosition.y += (targetMousePosition.y - mousePosition.y) * easeFactor*1.2;

    planeMesh.material.uniforms.u_mouse.value.set(
      mousePosition.x,
      1.0 - mousePosition.y
    );

    planeMesh.material.uniforms.u_prevMouse.value.set(
      prevPosition.x,
      1.0 - prevPosition.y
    );

    aberrationIntensity = Math.max(0.0, aberrationIntensity - 0.05);

    planeMesh.material.uniforms.u_aberrationIntensity.value =
      aberrationIntensity;

    renderer.render(scene, camera);
  }

  function handleMouseMove(event) {
    easeFactor = 0.05; //increase to increase speed of distortion
    let rect = imageContainer.getBoundingClientRect();
    prevPosition = { ...targetMousePosition };

    targetMousePosition.x = (event.clientX - rect.left) / rect.width;
    targetMousePosition.y = (event.clientY - rect.top) / rect.height;

    aberrationIntensity = 0;
  }

  function handleMouseEnter(event) {
    easeFactor = 0.03;
    let rect = imageContainer.getBoundingClientRect();

    mousePosition.x = targetMousePosition.x =
      (event.clientX - rect.left) / rect.width;
    mousePosition.y = targetMousePosition.y =
      (event.clientY - rect.top) / rect.height;
  }

  function handleMouseLeave() {
    easeFactor = 0.03;
    targetMousePosition = { ...prevPosition };
  }

  useEffect(() => {
    // use the existing image from html in the canvas
    imageContainer = document.getElementById(containerId);
    imageElement = document.getElementById(imageId);

    scene = new THREE.Scene();

    // camera setup
    camera = new THREE.PerspectiveCamera(
      80,
      imageContainer.offsetWidth / imageContainer.offsetHeight,
      0.01,
      100
    );
    camera.position.z = 1;

    initializeScene(new THREE.TextureLoader().load(imageElement.src));
   
    animateScene();
  }, []);

  // window.addEventListener(
  //   "resize",
  //   useEffect(() => {
  //     let w = imageContainer.offsetWidth;
  //     let h = imageContainer.offsetHeight;
  //     renderer.setSize(w, h);
  //     camera.aspect = w / h;
  //     camera.updateProjectionMatrix();
  //   }, [])
  // );

  
  return (
    <div className="">
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        id={containerId}
        className="imageContainer"
      >
        {/* <div className=" inset-0 z-[10] flex justify-center w-full h-full">
        <h1 
        id="heroText"
            className="absolute text-white z-[10] pointer-events-none text-7xl block mx-auto font-serif  w-fit h-fit">Unseen. Unknown. Unmatched.</h1>
        </div> */}
        <img
          id={imageId}
          // src="https://raw.githubusercontent.com/naymurdev/LiquidDistortionSlider/main/img/2.jpg"
          // src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
          src={src}
          className="myImage "
        />
      </div>
    </div>
  );
}

export default Distortion;
