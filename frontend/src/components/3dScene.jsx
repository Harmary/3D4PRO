import { Canvas, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import gltfmodel from '../assets/gltf/sourse/home.gltf';


const Model = (link) => {
  const gltf = useLoader(GLTFLoader, gltfmodel);
  return (
    <>
      <primitive object={gltf.scene} scale={5} />
    </>
  );
};


function Scene(model) {
  return (
    <Canvas style={{ background: "#171717", width: "inherit", height: 500 }}>
      <Suspense fallback={null}>
        <Model link={model} />
        <OrbitControls />
        <Environment preset='forest' background />
      </Suspense>
    </Canvas>
  );
}

export default Scene;
