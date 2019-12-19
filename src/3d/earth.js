import './earth.css';
import React, { Component } from 'react';
import * as THREE from 'three';
import Orbitcontrols from 'three-orbitcontrols';
import Stats from './stats.min.js';

class ThreeMap extends Component{
    componentDidMount(){
       this.initThree();
   }
   initThree(){
       let stats;
       let camera, scene, renderer;
       let group;
       let container = document.getElementById('WebGL-output');
       let width = container.clientWidth,height = container.clientHeight;

       init();
       animate();
       var uniforms;
       var clock ;
       function init() {
           scene = new THREE.Scene();
           group = new THREE.Group();
           clock = new THREE.Clock();
           scene.add( group );
        //   scene.background = new THREE.Color( 0xFFFFFF );
            scene.renderer = new THREE.WebGLRenderer( { alpha: true });
            scene.renderer.setClearAlpha(0);
           camera = new THREE.PerspectiveCamera( 60, width / height, 1, 2000 );
           camera.position.x = -10;
           camera.position.y = 15;
           camera.position.z = 500;
           camera.lookAt( scene.position );
           
           //控制地球
           let orbitControls = new Orbitcontrols(camera, container);
           orbitControls.autoRotate = false;
           // let clock = new THREE.Clock();
           //光源
           let ambi = new THREE.AmbientLight(0x686868);
           scene.add(ambi);

           let spotLight = new THREE.DirectionalLight(0xffffff);
           spotLight.position.set(550, 100, 550);
           spotLight.intensity = 0.6;

           scene.add(spotLight);
           // Texture
           let loader = new THREE.TextureLoader();
           let planetTexture = require("./Earth.jpg");
           let earthNormal = require("./EarthNormal.png");
           let earthSpec = require("./EarthSpec.png");
           
           let textureNormal = loader.load(earthNormal);
           let textureSpecular = loader.load(earthSpec);
           let texture = loader.load( planetTexture );
           var material = new THREE.MeshPhongMaterial({
            map: texture,
            normalMap: textureNormal,
            normalScale: new THREE.Vector2(2.9,2.9),
            specularMap: textureSpecular,
            transparent: true,
            opacity: 0.7,
        });
        var box = new THREE.SphereGeometry(200,300,300);
        var mesh = new THREE.Mesh(box,material);
           var box2 = new THREE.SphereGeometry(200.1,300,300);
           var texture1 = loader.load(require("./zaosheng.png"));
           var texture2 = loader.load(require("./daqi.png"));
           texture1.wrapS = THREE.RepeatWrapping;
           texture1.wrapT = THREE.RepeatWrapping;
           texture2.wrapS = THREE.RepeatWrapping;
           texture2.wrapT = THREE.RepeatWrapping;
           uniforms = {
               time: {
                   value: 1
               },
               texture1: {
                   value: texture1
               },
               texture2: {
                   value: texture2
               },
               opacity: {
                   value: 0.4
               }
               ,transparent: true
           };
           var material2 = new THREE.ShaderMaterial({
               uniforms: uniforms,
               vertexShader: document.getElementById("vertexShader").textContent,
               fragmentShader: document.getElementById("fragmentShader").textContent,
               transparent: true
           });
           var mesh2 = new THREE.Mesh(box2,material2);
           group.add(mesh, mesh2);
           var posTrack = new THREE.KeyframeTrack(".scale",[0, 10],[0.01, 0.01, 0.01, 1, 1, 1]);
    var clip = new THREE.AnimationClip("default",10,[posTrack]);
    var mixer = new THREE.AnimationMixer();
    var AnimationAction = mixer.clipAction(clip, group);
    AnimationAction.loop = THREE.LoopOnce;
    AnimationAction.clampWhenFinished = true;
    AnimationAction.play();

           renderer = new THREE.WebGLRenderer( { alpha: true } );
        //    renderer.setClearColor( 0x000000,0.5);
           renderer.setPixelRatio( window.devicePixelRatio );
           renderer.setSize( width, height );
           container.appendChild( renderer.domElement );
        //    stats = new Stats();
        //    container.appendChild( stats.dom );  //增加状态信息 

       }
       
       function animate() {
           requestAnimationFrame( animate );
           render();
        //    stats.update();
       }
       
       
       function render() {		
        var delta = clock.getDelta();
            uniforms.time.value += delta;
           group.rotation.y -= 0.005;  //这行可以控制地球自转
           renderer.render( scene, camera );
       }
   }
   render(){
       return(
           <div id='WebGL-output' style={{'position':'fix','bottom':'0px','left':'0px','height':'600px'}}>
               
           </div>
       )
   }
}

export default ThreeMap;