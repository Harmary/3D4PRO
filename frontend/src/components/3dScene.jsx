import { startTransition, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Center,
  useGLTF,
  OrbitControls,
  Environment,
  Sky,
} from "@react-three/drei";
import * as THREE from "three";

function Model(props) {
  const { scene } = useGLTF(props.model);

  return <primitive scale={5} object={scene} />;
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
