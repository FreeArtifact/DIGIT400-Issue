import * as THREE from "three";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  100,
  window.innerWidth / window.innerHeight,
  0.001,
  1000,
);

// create a new renderer by instating the canvas element in our HTML // file
const renderer = new THREE.WebGLRenderer({
  // canvas: document.querySelector("#bg"),
  antialias: true,
});

// renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

renderer.render(scene, camera);

camera.position.z = 3.25;
// camera.position.setZ(50);
// camera.position.setX(-3);

const geo = new THREE.IcosahedronGeometry(2, 1);
const mat = new THREE.MeshStandardMaterial({
  color: 0x1591df,
  flatshading: true,
});
const mesh = new THREE.Mesh(geo, mat);

// mesh.position.z = -15;

// cube.rotation.x = 2;
// cube.rotation.y = 0.5;

scene.add(mesh);

const hemiLight = new THREE.HemisphereLight(0xab006c, 0xe68e00);
scene.add(hemiLight);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

// This confirms I'm having a JS problem and not positioning
const lightHelper = new THREE.PointLightHelper(pointLight);
scene.add(lightHelper);

// Maybe try enabling gpu?
