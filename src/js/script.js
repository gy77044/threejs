//import every thing from three
import * as  THREE from 'three';


//create instance of WebGLRenderer 
//allocate space for rendering in webPage
const renderer = new THREE.WebGLRenderer();


//set the size for rendering 
renderer.setSize(window.innerWidth, window.innerHeight);

// inject & include the space into the page
document.body.appendChild(renderer.domElement);
