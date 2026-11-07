import * as THREE from "three";

const w = window.innerWidth;
const h = window.innerHeight;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);

document.body.appendChild(renderer.domElement);

const fov = 75;
const aspect = w / h;
const near = 0.1;
const far = 10;

const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

// renderer.setPixelRatio(window.devicePixelRatio);
camera.position.z = 2.25;
const scene = new THREE.Scene();

// Geometry
const geo = new THREE.BoxGeometry(1, 1, 1);
const sphere = new THREE.SphereGeometry(0.75);

// Materials
const mat = new THREE.MeshStandardMaterial({
  color: 0x1591df,
});
const mat2 = new THREE.MeshStandardMaterial({ color: 0x159fdf });

// Meshes
const mesh = new THREE.Mesh(geo, mat);
scene.add(mesh);
const sphereMesh = new THREE.Mesh(sphere, mat2);
scene.add(sphereMesh);

const hemiLight = new THREE.HemisphereLight(0xab006c, 0xe26e00, 50.0);
scene.add(hemiLight);

// Transformations
mesh.position.x = -1;
sphereMesh.position.x = 1;

// Maybe try enabling gpu?

function animate(t = 0) {
  requestAnimationFrame(animate);
  mesh.rotation.y = t * 0.0002;
  mesh.rotation.x = t * 0.0002;
  // mesh.scale.setScalar(Math.cos(t * 0.001) + 1.0);
  renderer.render(scene, camera);
  controls.update();
}

animate();
