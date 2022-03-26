import * as THREE from 'three';
import {GLTFLoader} from './node_modules/three/examples/jsm/loaders/GLTFLoader.js'

const loader = new GLTFLoader();
const scene = new THREE.Scene()
const cvs = document.querySelector('#cvs')

const camera = new THREE.PerspectiveCamera(
    80, // FOV
    window.innerWidth/window.innerHeight,
    0.1,
    1000
)
camera.position.set(0,0,50) // CAMERA
scene.add(camera)

const renderer = new THREE.WebGL1Renderer({canvas:cvs})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
renderer.shadowMap.enabled = true
renderer.gammaOutput = true
renderer.setClearColor(0x0,0)

const pivot = new THREE.Group()
scene.add(pivot)
var a = ''
// Load a glTF resource
loader.load(
	// resource URL
	'./main.glb',
	// called when the resource is loaded
	function ( gltf ) {
        console.log(gltf.scene.children)
        gltf.scene.children[2].material.opacity = 0.5; // tou ming du
        gltf.scene.children[2].material.transparent = true;

		// scene.add( gltf.scene);
		pivot.add(gltf.scene)
		a = gltf.scene;
		a.position.set(0,0,3) // Where

        console.log(gltf.asset)
        renderer.render(scene, camera)
	},
	// called while loading is progressing
	function ( xhr ) {
		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
	},
	// called when loading has errors
	function ( error ) {
		console.log( 'An error happened' );
	}
);

const light = new THREE.DirectionalLight(0xffffff,1)
light.position.set(0,0,10)
scene.add(light)


function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    
    if (a) {
        // console.log(a&&a.children[2])
        // a.children[2].rotation.y+=0.01
		// a.children[2].rotation.z+=0.01
		pivot.rotation.y += 0.008 // speed
    }
}

animate()
