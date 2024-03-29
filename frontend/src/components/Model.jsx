/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: SunnyBuns (https://sketchfab.com/SunnyBuns)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/duck-plush-886b9a0dfbc34cf2bea40cfb724457a6
title: Duck Plush
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/duck_plush.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={2.54}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Box001_01_-_Default_0"].geometry}
              material={materials["01_-_Default"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/duck_plush.glb");
