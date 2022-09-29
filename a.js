import * as THREE from 'three';
import {GLTFLoader} from './GLTFLoader.js'

const loader = new GLTFLoader();
const scene = new THREE.Scene()
const cvs = document.querySelector('#cvs')
// const n = cvs.getContext('2d')
n.globalAlpha = 0.5;
const camera = new THREE.PerspectiveCamera(
    80, // FOV
    window.innerWidth/window.innerHeight,
    0.1,
    1000
)
camera.position.set(0,0,45) // CAMERA
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
	'main.glb',
	// called when the resource is loaded
	function ( gltf ) {
		a = gltf.scene;
        console.log(gltf.scene.children)
        //a.children[2].material.opacity = 1;
        //a.children[2].material.transparent = false;
		// a.children[2].material.color.set('hsl(0, 0%, 50%)')

		// scene.add( gltf.scene);
		pivot.add(gltf.scene)
		
		a.position.set(0,0,2) // Where

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
    // const img = document.querySelector('#i')
	// img.src = renderer.domElement.toDataURL()
    if (a) {
        // console.log(a&&a.children[2])
        // a.children[2].rotation.y+=0.01
		// a.children[2].rotation.z+=0.01
		pivot.rotation.y += 0.01 // speed
    }
}

animate()
