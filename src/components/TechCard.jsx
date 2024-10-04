/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Snooze (https://sketchfab.com/Snooze)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/low-poly-sci-fi-tablet-ee1fde7ec1514fd5a61790809ebd46a6
Title: Low Poly Sci-Fi Tablet
*/

import React, { useRef } from "react";
import { Sparkles, Text, useGLTF, useTexture } from "@react-three/drei";
import PlaneObject from "./PlaneObject";

export default function TechCard(props) {
  const { nodes, materials } = props?.model;
  const image = useTexture("/icon/backgroundDefault.jpg");

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.MAT_TabletGlass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials.MAT_OpacityText}
          >
            <meshBasicMaterial map={image} />
            <PlaneObject
              args={[1, 1]}
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, 0, -0.3]}
              scale={0.8}
              image={props.image}
            />
            <Text
              fontSize={0.12}
              color="skyblue"
              position={[0, 0, 0.2]}
              rotation={[-Math.PI / 2, 0, 0]}
              text={props.title}
              font="public/font/SuperchargeLaser-9YZjj.otf"
            >
              <meshPhongMaterial emissive="skyblue" emissiveIntensity={0.8} />
              <pointLight position={[0, 0, 1]} intensity={1} color="skyblue" />
            </Text>
            <Text
              fontSize={0.07}
              color="white"
              position={[0.1, 0.02, 0.5]}
              rotation={[-1.6, 0, 0]}
              text={props.description}
              maxWidth={1}
              font="public/font/XerodaRegular-p7dwr.otf"
            />
            <Text
              fontSize={0.16}
              color="violet"
              position={[0.1, 0.02, 0.75]}
              rotation={[-1.6, 0, 0]}
              text={props.skill}
              maxWidth={1}
              font="public/font/SuperchargeLaser-9YZjj.otf"
            />
            <Sparkles count={5} size={2} scale={10} speed={1} color="blue" />
            <Sparkles count={5} size={3} scale={10} speed={1} color="violet" />
            <Sparkles count={5} size={1} scale={10} speed={1} color="pink" />
            <Sparkles count={5} size={4} scale={10} speed={1} color="yellow" />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_2.geometry}
            material={materials.MAT_Tablet}
          />
        </group>
      </group>
    </group>
  );
}
