var scene = new THREE.Scene();

var scene3d = document.getElementById("interaccionDosId");
var CANVAS_WIDTH = 1080;
var CANVAS_HEIGHT = 860;

var camera = new THREE.PerspectiveCamera( 75, CANVAS_WIDTH/CANVAS_HEIGHT, 0.1, 1000 );
camera.position.z = 600;
camera.lookAt(scene.position);

var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(CANVAS_WIDTH, CANVAS_HEIGHT);
renderer.setClearColor( 0x000000, 0 );
interaccionDosId.appendChild(renderer.domElement);
renderer.render(scene, camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;

var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
keyLight.position.set(-100, 0, 100);

var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
fillLight.position.set(100, 0, 100);

var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
backLight.position.set(100, 0, -100).normalize();

scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);

var mtlLoader = new THREE.MTLLoader();
mtlLoader.setTexturePath('/modelado/');
mtlLoader.setPath('/modelado/');
mtlLoader.load('r2-d2.mtl', function (materials) {

    materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.setPath('/modelado/');
    objLoader.load('r2-d2.obj', function (object) {

        scene.add(object);
        object.position.y -= 300;

    });

});

var animate = function () {
	requestAnimationFrame( animate );
	controls.update();
	renderer.render(scene, camera);
};

animate();