import * as THREE from "three";

const w = window.innerWidth * 0.95;
const h = window.innerHeight * 0.95;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);

document.body.appendChild(renderer.domElement);

const fov = 100;
const aspect = w / h;
const near = 0.1;
const far = 100;

const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

// renderer.setPixelRatio(window.devicePixelRatio);

const scene = new THREE.Scene();

camera.position.z = 2.25;

const geo = new THREE.IcosahedronGeometry(1.0, 2);
const mat = new THREE.MeshBasicMaterial({
  color: 0x1591df,
  flatshading: true,
});
const mesh = new THREE.Mesh(geo, mat);
scene.add(mesh);

const hemiLight = new THREE.HemisphereLight(0xab006c, 0xe68e00);
scene.add(hemiLight);

// This confirms I'm having a JS problem and not positioning
const lightHelper = new THREE.PointLightHelper(pointLight);
scene.add(lightHelper);

// Maybe try enabling gpu?

renderer.render(scene, camera);
