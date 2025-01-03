/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: re1monsen (https://sketchfab.com/re1monsen)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/scifi-fan-convector-heater-74ebc880ecc440128291c260c7889553
Title: SciFi Fan Convector Heater
*/
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function ScifiFan(props) {
  const { nodes, materials } = useGLTF(
    "/models/3d/scifi_fan_convector_heater.glb"
  );
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.05}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.fan010_low_fan_0.geometry}
            material={materials.material}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.fan001_low_fan_0.geometry}
            material={materials.material}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.fan002_low_fan_0.geometry}
            material={materials.material}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.fan003_low_fan_0.geometry}
            material={materials.material}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.fan004_low_fan_0.geometry}
            material={materials.material}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.fan005_low_fan_0.geometry}
            material={materials.material}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.fan006_low_fan_0.geometry}
            material={materials.material}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.fan007_low_fan_0.geometry}
            material={materials.material}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.fan008_low_fan_0.geometry}
            material={materials.material}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.fan009_low_fan_0.geometry}
            material={materials.material}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.fan011_low_fan_0.geometry}
            material={materials.material}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.fan_low_fan_0.geometry}
            material={materials.material}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ground_low_grond_0.geometry}
            material={materials.grond}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.air_1_emit_0.geometry}
            material={materials.emit}
            position={[-309.548, 1916.174, -353.073]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.air_2_emit_0.geometry}
            material={materials.emit}
            position={[-309.548, 1986.848, 1455.914]}
            rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
            scale={100}
          />
        </group>
      </group>
      {/* Bloom effect using EffectComposer */}
      <EffectComposer>
        <Bloom
          luminanceThreshold={0.1}
          luminanceSmoothing={1.0}
          intensity={0.2}
        />
      </EffectComposer>
    </group>
  );
}

useGLTF.preload("/models/3d//scifi_fan_convector_heater.glb");
