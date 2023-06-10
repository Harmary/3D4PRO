import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, useGLTF, OrbitControls, Environment, Sky } from "@react-three/drei";
import * as THREE from "three";

function Model(link) {
  const { scene } = useGLTF(`https://s3.timeweb.com/373825a7-49aec453-9ac5-487f-a13b-54d1d68bc0de/models/be1f5dac-199d-41f3-b479-e40859dd5045/e37bd034-20bc-47ba-8f16-c2590124c257/sourse/домик.gltf`);
  return <primitive object={scene} />;
}

function Scene(props) {
  return (
    <div
      style={{ height: "100%" }}
      camera={{ position: new THREE.Vector3(8, 5, 40) }}
    >
      <Suspense>
        <Canvas
          shadows
          camera={{ position: [0, -10, 100], fov: 50 }}
          dpr={[1, 2]}
        >
          <Environment background preset="forest"/>
          <Center>
            <Model link={props.link} />
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
