import { startTransition, Suspense } from "react";
import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Center,
  useGLTF,
  OrbitControls,
  Environment,
  Sky,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";

function Model(props) {
  const groupRef = useRef();
  const { scene, nodes, materials } = useGLTF(props.model);
  scene.children[0].position.set(0, 0, 0);
  scene.children[0].rotation.set(0, 0, 0);
  return (
    <primitive object={scene}  scale={10}/>
  );
}

function Scene(props) {
  return (
    <div
      style={{ height: "100%", width: "100%" }}
      camera={{ position: new THREE.Vector3(8, 5, 40) }}
    >
      <Suspense startTransition fallback={null}>
        <Canvas
          shadows
          camera={{ position: [0, -10, 100], fov: 50 }}
          dpr={[1, 2]}
        >
          <Environment background preset='forest' />
          <Center>
            <Model model={props.link} />
          </Center>
          <OrbitControls
            makeDefault
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 1.75}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default Scene;
