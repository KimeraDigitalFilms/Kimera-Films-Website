/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.gltf -T --shadows 
Files: scene.gltf [5.88KB] > /Users/robinsen/Desktop/Coding/React Js/ThreeJs/public/glass_vase/scene-transformed.glb [79.25KB] (-1248%)
Author: Sousinho (https://sketchfab.com/sousinho)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/simple-glass-vase-cdc94f959e2f4b5784b60196a98cc354
Title: Simple Glass Vase
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function GlassModel() {
  const { nodes, materials } = useGLTF("/3D/glass_vase/scene-transformed.glb");
  return (
    <group  dispose={null} scale={2}>
      <mesh 
        // castShadow
        // receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.Vase}
        position={[0,0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/3D/glass_vase/scene-transformed.glb");
