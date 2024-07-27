import React from "react"
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Stage,
  TrackballControls,
} from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import degrees_to_radians from "../../utils"
import * as THREE from "three"
import { GlassModel } from "./Model"

function ModelElement() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[1, 0, 4]} />
      <TrackballControls noPan noZoom rotateSpeed={3} />

      {/* <spotLight
        args={["blue", 25, 0, degrees_to_radians(45), 0.4]}
        position={[-2.5, 2, 0]}
        castShadow
      /> */}
      <directionalLight
        args={["white", 15]}
        position={[-1.5, 1, 0]}
        // castShadow
      />
      <ambientLight args={["orange", 10]} />
      {/* <Stage preset={'upfront'} adjustCamera={5} environment={'warehouse'} ></Stage> */}

      <GlassModel />
      <Environment background={false} preset="warehouse" />
      {/*  
      <Environment >
        <mesh>
          <sphereGeometry args={[50, 100, 100]} />
          <meshBasicMaterial
            // color="white"
            toneMapped={false}
            side={THREE.BackSide}
          />
        </mesh>
      </Environment>  */}
    </>
  )
}

export default ModelElement
