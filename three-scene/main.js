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

const geo = new THREE.BoxGeometry(1, 1, 1);
const mat = new THREE.MeshStandardMaterial({
  color: 0x1591df,
  // flatshading: true,
});
const mesh = new THREE.Mesh(geo, mat);
scene.add(mesh);

const hemiLight = new THREE.HemisphereLight(0xab006c, 0xe26e00, 50.0);
scene.add(hemiLight);

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
