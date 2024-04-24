import * as THREE from "three";
import "./style.css";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// Scene
const scene = new THREE.Scene();
// Color
let color = () => {
  const code = [..."0123456789abcdef"];
  let final = "#";
  for (let i = 0; i < 6; i++) {
    final += code[Math.floor(Math.random() * code.length)];
  }
  return final;
};
let colorCode = {
  cl: color(),
};

// create our Sphere
const depth = 99;
const geometry = new THREE.SphereGeometry(3, depth, depth);
const material = new THREE.MeshStandardMaterial({
  color: colorCode.cl,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Light
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 10, 10);
scene.add(light);

// Camera
const camera = new THREE.PerspectiveCamera(
  45,
  size.width / size.height,
  0.1,
  100,
);
camera.position.z = 20;
scene.add(camera);
// console.log (camera)

const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setPixelRatio = 5555;
renderer.setSize(size.width, size.height);
renderer.render(scene, camera);

// controls
const controls = new OrbitControls(camera, canvas);
controls.enablePan = false;
controls.enableZoom = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 7;

// resize
window.addEventListener("resize", () => {
  size.width = window.innerWidth;
  size.height = window.innerHeight;
  camera.aspect = size.width / size.height;
  camera.UpdateProjectionMatrix();
  renderer.setSize(size.width, size.height);
});

const loop = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop);
};

loop();

console.log(THREE);
