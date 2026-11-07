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
const scene = new THREE.Scene();

// GEOMETRY----
const geo = new THREE.BoxGeometry(1, 1, 1);
const sphere = new THREE.SphereGeometry(0.75);

// MATERIALS----
const mat = new THREE.MeshStandardMaterial({ color: 0x1591df });
const mat2 = new THREE.MeshStandardMaterial({ color: 0x159fdf });

const matCloth = new THREE.MeshPhongMaterial();
const normalCloth = new THREE.TextureLoader().load("images/cloth.png");
const textureCloth = new THREE.TextureLoader().load("images/clothColor.png");

matCloth.map = textureCloth;
matCloth.normalMap = normalCloth;
matCloth.normalScale.set(2, 2);

// MESHES----
const mesh = new THREE.Mesh(geo, mat);
scene.add(mesh);
const sphereMesh = new THREE.Mesh(sphere, matCloth);
scene.add(sphereMesh);

const hemiLight = new THREE.HemisphereLight(0xffffff, 0xddd34f, 3.0);
scene.add(hemiLight);

// TRANSFORMATIONS----
mesh.position.x = -1;
sphereMesh.position.x = 1;
camera.position.z = 2.25;
camera.position.y = 1;
camera.rotation.x = -0.25;

// MISCELLANEOUS----
const gridHelper = new THREE.GridHelper(200, 100);
scene.add(gridHelper);
const chapel = new THREE.TextureLoader().load("images/prochilo.jpg");
scene.background = chapel;

// Maybe try enabling gpu?

function animate(t = 0) {
  requestAnimationFrame(animate);
  mesh.rotation.y = t * 0.0002;
  mesh.rotation.x = t * 0.0002;
  sphereMesh.rotation.y = t * -0.0002;
  // mesh.scale.setScalar(Math.cos(t * 0.001) + 1.0);
  renderer.render(scene, camera);
}

animate();
