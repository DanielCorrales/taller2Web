var scene = new THREE.Scene();

var scene3d = document.getElementById("interaccionDosId");
var CANVAS_WIDTH = 1080;
var CANVAS_HEIGHT = 1050;

var camera = new THREE.PerspectiveCamera(75, CANVAS_WIDTH / CANVAS_HEIGHT, 0.1, 1000);
camera.position.z = 600;
camera.lookAt(scene.position);

var renderer = new THREE.WebGLRenderer({
    alpha: true
});
renderer.setSize(CANVAS_WIDTH, CANVAS_HEIGHT);
renderer.setClearColor(0x000000, 0);
interaccionDosId.appendChild(renderer.domElement);
renderer.render(scene, camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;

var light, materials;
scene.add(new THREE.AmbientLight(0x666666));
light = new THREE.DirectionalLight(0xdfebff, 1);
light.position.set(50, 200, 100);
light.position.multiplyScalar(1.3);
light.castShadow = true;
light.shadow.mapSize.width = 1024;
light.shadow.mapSize.height = 1024;
var d = 300;
light.shadow.camera.left = -d;
light.shadow.camera.right = d;
light.shadow.camera.top = d;
light.shadow.camera.bottom = -d;
light.shadow.camera.far = 1000;
scene.add(light);

//var material ='CristianoRonaldo.mtl';

var botonReal = document.getElementById("madrid");
var botonAtletico = document.getElementById("atletico");
var botonBarcelona = document.getElementById("barcelona");
var botonChelsea = document.getElementById("chelsea");
var botonManchester = document.getElementById("manchester");
var botonPsg = document.getElementById("psg");

var mtlLoader = new THREE.MTLLoader();
var objLoader = new THREE.OBJLoader();
mtlLoader.setTexturePath('/modelado/');
mtlLoader.setPath('/modelado/');

//DEFAULT ATLETICO*************************************************
mtlLoader.load('CristianoRonaldo.mtl', function (materials) {

    materials.preload();
    objLoader.setMaterials(materials);
    objLoader.setPath('/modelado/');

    objLoader.load('CristianoRonaldo.obj', function (object) {

        scene.add(object);
        object.position.y -= 350;
        object.scale.x = -1;

    });

});

//ATLETICO*************************************************
botonAtletico.onclick = function () {
    mtlLoader.load('CristianoRonaldo.mtl', function (materials) {

        materials.preload();
        objLoader.setMaterials(materials);
        objLoader.setPath('/modelado/');

        objLoader.load('CristianoRonaldo.obj', function (object) {

            scene.add(object);
            object.position.y -= 350;
            object.scale.x = -1;

        });

    });

}


//MADRID*************************************************
botonReal.onclick = function () {

    mtlLoader.load('CristianoRonaldoReal.mtl', function (materials) {

        materials.preload();
        objLoader.setMaterials(materials);
        objLoader.setPath('/modelado/');

        objLoader.load('CristianoRonaldo.obj', function (object) {

            scene.add(object);
            object.position.y -= 350;
            object.scale.x = -1;

        });

    });



}

//BARCELONA*************************************************
botonBarcelona.onclick = function () {

    mtlLoader.load('CristianoRonaldoBarcelona.mtl', function (materials) {

        materials.preload();
        objLoader.setMaterials(materials);
        objLoader.setPath('/modelado/');

        objLoader.load('CristianoRonaldo.obj', function (object) {

            scene.add(object);
            object.position.y -= 350;
            object.scale.x = -1;

        });

    });
}


//MANCHESTER*************************************************
botonManchester.onclick = function () {

    mtlLoader.load('CristianoRonaldoManchester.mtl', function (materials) {

        materials.preload();
        objLoader.setMaterials(materials);
        objLoader.setPath('/modelado/');

        objLoader.load('CristianoRonaldo.obj', function (object) {

            scene.add(object);
            object.position.y -= 350;
            object.scale.x = -1;

        });

    });
}

//CHELSEA*************************************************
botonChelsea.onclick = function () {

    mtlLoader.load('CristianoRonaldoChelsea.mtl', function (materials) {

        materials.preload();
        objLoader.setMaterials(materials);
        objLoader.setPath('/modelado/');

        objLoader.load('CristianoRonaldo.obj', function (object) {

            scene.add(object);
            object.position.y -= 350;
            object.scale.x = -1;

        });

    });
}

//PSG*************************************************
botonPsg.onclick = function () {

    mtlLoader.load('CristianoRonaldoPsg.mtl', function (materials) {

        materials.preload();
        objLoader.setMaterials(materials);
        objLoader.setPath('/modelado/');

        objLoader.load('CristianoRonaldo.obj', function (object) {

            scene.add(object);
            object.position.y -= 350;
            object.scale.x = -1;

        });

    });
}


var animate = function () {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
};

animate();