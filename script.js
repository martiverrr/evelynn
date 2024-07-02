let scene, camera, renderer;

function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 100;

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Estrellas en 3D
  let starsGeometry = new THREE.Geometry();
  for (let i = 0; i < 1000; i++) {
    let star = new THREE.Vector3();
    star.x = THREE.MathUtils.randFloatSpread(2000);
    star.y = THREE.MathUtils.randFloatSpread(2000);
    star.z = THREE.MathUtils.randFloatSpread(2000);
    starsGeometry.vertices.push(star);
  }
  let starsMaterial = new THREE.PointsMaterial({ color: 0xffffff });
  let starField = new THREE.Points(starsGeometry, starsMaterial);
  scene.add(starField);

  animate();
}

function animate() {
  requestAnimationFrame(animate);

  // Animación de la escena
  renderer.render(scene, camera);
}

init();

