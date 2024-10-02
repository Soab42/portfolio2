import React, { useRef } from "react";
import { Text, useGLTF, useTexture, useVideoTexture } from "@react-three/drei";
import TechCard from "./TechCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import MonitorScreen from "./MonitorScreen";
export default function RamenMachine(props) {
  const ref = useRef();
  const meshRef = useRef();
  const textRef = useRef();
  const { nodes, materials } = useGLTF("/models/3d/ramen_vending_machine.glb");
  const videoTexture = useVideoTexture(props?.video); // Pass video as prop to useVideoTexture
  const texture1 = useTexture(props?.image1); // Pass image1 as prop
  const texture2 = useTexture(props?.image2); // Pass image2 as prop
  const texture3 = useTexture(props?.image3); // Pass image3 as prop
  const texture4 = useTexture(props?.image4); // Pass image4 as prop
  const texture5 = useTexture(props?.image5); // Pass image5 as prop
  const texture6 = useTexture(props?.image6); // Pass image5 as prop
  useGSAP(() => {
    if (ref.current) {
      gsap.from(ref.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: 1,
        ease: "power1.inOut",
      });

      gsap.to(ref.current.rotation, {
        y: 2 * Math.PI - 0.5,
        duration: 1,
        ease: "power1.inOut",
      });

      gsap.to(ref.current.position, {
        z: 2 * Math.PI,
        x: 2 * Math.PI,
        duration: 1,
        ease: "power1.inOut",
      });
    }
  });

  // Color-changing background
  const bgColorRef = useRef({ r: 0, g: 0, b: 1 });

  useFrame(() => {
    // Animate background color
    const time = Date.now() * 0.001;
    bgColorRef.current.r = Math.sin(time * 0.3) * 0.5 + 0.5;
    bgColorRef.current.g = Math.sin(time * 0.5) * 0.5 + 0.5;
    bgColorRef.current.b = Math.sin(time * 0.7) * 0.5 + 0.5;
    meshRef.current.material.color.setRGB(
      bgColorRef.current.r,
      bgColorRef.current.g,
      bgColorRef.current.b
    );
    // Rotate the text
  });

  return (
    <group {...props} dispose={null} ref={ref}>
      {/* Original meshes */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.Ramen_Machine}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.Ramen_Machine}
      />

      {/* screen */}
      <mesh castShadow receiveShadow position={[0, 2.0, 0.3]} ref={meshRef}>
        <MonitorScreen
          material={materials.Ramen_Machine}
          scale={[0.5, 0.5, 0.5]}
          position={[0, -0.5, 0]}
          texture={videoTexture}
        />
        ;
      </mesh>
      {/* Six additional meshes */}
      {/* clear bg */}
      {/* Logo name */}
      <group>
        <mesh castShadow receiveShadow position={[0, 0.25, 0.29]} ref={meshRef}>
          <planeGeometry args={[1.05, 0.47, 1]} />
          {/* Background Color-Changing Effect */}
          <meshStandardMaterial />

          {/* Glowing Text */}
          <Text
            ref={textRef}
            position={[0, 0.01, 0.01]}
            fontSize={0.1}
            color={"white"}
            font="public/font/SuperchargeLaser-9YZjj.otf"
            maxWidth={0.45}
            textAlign={"center"}
            letterSpacing={0.2}
            lineHeight={1.5}
            outlineWidth={0.01} // Optional glow on hover
            outlineColor={"black"} // Glow color
            outlineBlur={0.008} // Glow blur
          >
            {props?.title}
          </Text>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          position={[-0.35, 1.44, 0.31]} // First position
          radius={1.5}
        >
          <planeGeometry args={[0.2, 0.29, 1]} />
          <meshMatcapMaterial color={"black"} /> {/* Texture 1 from props */}
        </mesh>

        <mesh
          castShadow
          receiveShadow
          position={[-0.056, 1.44, 0.31]} // Second position
        >
          <planeGeometry args={[0.2, 0.29, 1]} />
          <meshMatcapMaterial color={"black"} /> {/* Texture 2 from props */}
        </mesh>

        <mesh
          castShadow
          receiveShadow
          position={[0.24, 1.44, 0.31]} // Third position
        >
          <planeGeometry args={[0.2, 0.29, 1]} />
          <meshMatcapMaterial color={"black"} /> {/* Texture 3 from props */}
        </mesh>

        {/* Second row */}
        <mesh
          castShadow
          receiveShadow
          position={[-0.35, 1.09, 0.31]} // Fourth position
        >
          <planeGeometry args={[0.2, 0.29, 1]} />
          <meshMatcapMaterial color={"black"} /> {/* Texture 4 from props */}
        </mesh>

        <mesh
          castShadow
          receiveShadow
          position={[-0.056, 1.09, 0.31]} // Fifth position
        >
          <planeGeometry args={[0.2, 0.29, 1]} />
          <meshMatcapMaterial color={"black"} /> {/* Texture 5 from props */}
        </mesh>

        <mesh
          castShadow
          receiveShadow
          position={[0.24, 1.09, 0.31]} // Sixth position
        >
          <planeGeometry args={[0.2, 0.29, 1]} />
          <meshMatcapMaterial color={"black"} />{" "}
          {/* Placeholder for sixth texture */}
        </mesh>
        {/* first row */}
      </group>
      <group>
        <mesh
          castShadow
          receiveShadow
          position={[-0.35, 1.46, 0.31]} // First position
        >
          <planeGeometry args={[0.2, 0.2, 1]} />
          <meshBasicMaterial map={texture1} transparent={true} />{" "}
          {/* Texture 1 from props */}
          <Text
            fontSize={0.05}
            color="white"
            position={[0, -0.13, 0.01]}
            rotation={[0, 0, 0]}
            text={"react"}
            font="public/font/SuperchargeLaser-9YZjj.otf"
          >
            <meshPhongMaterial emissive="skyblue" emissiveIntensity={0.8} />
          </Text>
        </mesh>

        <mesh
          castShadow
          receiveShadow
          position={[-0.056, 1.46, 0.31]} // Second position
        >
          <planeGeometry args={[0.2, 0.2, 1]} />
          <meshBasicMaterial map={texture2} /> {/* Texture 2 from props */}
          <Text
            fontSize={0.05}
            color="white"
            position={[0, -0.13, 0.01]}
            rotation={[0, 0, 0]}
            text={"react"}
            font="public/font/SuperchargeLaser-9YZjj.otf"
          >
            <meshPhongMaterial emissive="skyblue" emissiveIntensity={0.8} />
          </Text>
        </mesh>

        <mesh
          castShadow
          receiveShadow
          position={[0.24, 1.46, 0.31]} // Third position
        >
          <planeGeometry args={[0.2, 0.2, 1]} />
          <meshBasicMaterial map={texture3} /> {/* Texture 3 from props */}
          <Text
            fontSize={0.05}
            color="white"
            position={[0, -0.13, 0.01]}
            rotation={[0, 0, 0]}
            text={"react"}
            font="public/font/SuperchargeLaser-9YZjj.otf"
          >
            <meshPhongMaterial emissive="skyblue" emissiveIntensity={0.8} />
          </Text>
        </mesh>

        {/* Second row */}
        <mesh
          castShadow
          receiveShadow
          position={[-0.35, 1.12, 0.31]} // Fourth position
        >
          <planeGeometry args={[0.2, 0.2, 1]} />
          <meshBasicMaterial map={texture4} /> {/* Texture 4 from props */}
          <Text
            fontSize={0.05}
            color="white"
            position={[0, -0.13, 0.01]}
            rotation={[0, 0, 0]}
            text={"react"}
            font="public/font/SuperchargeLaser-9YZjj.otf"
          >
            <meshPhongMaterial emissive="skyblue" emissiveIntensity={0.8} />
          </Text>
        </mesh>

        <mesh
          castShadow
          receiveShadow
          position={[-0.056, 1.12, 0.31]} // Fifth position
        >
          <planeGeometry args={[0.2, 0.2, 1]} />
          <meshBasicMaterial map={texture5} /> {/* Texture 5 from props */}
          <Text
            fontSize={0.05}
            color="white"
            position={[0, -0.13, 0.01]}
            rotation={[0, 0, 0]}
            text={"react"}
            font="public/font/SuperchargeLaser-9YZjj.otf"
          >
            <meshPhongMaterial emissive="skyblue" emissiveIntensity={0.8} />
          </Text>
        </mesh>

        <mesh
          castShadow
          receiveShadow
          position={[0.24, 1.12, 0.31]} // Sixth position
        >
          <planeGeometry args={[0.2, 0.2, 1]} />
          <meshBasicMaterial map={texture6} />{" "}
          {/* Placeholder for sixth texture */}
          <Text
            fontSize={0.05}
            color="white"
            position={[0, -0.13, 0.01]}
            rotation={[0, 0, 0]}
            text={"react"}
            font="public/font/SuperchargeLaser-9YZjj.otf"
          >
            <meshPhongMaterial emissive="skyblue" emissiveIntensity={0.8} />
          </Text>
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/models/3d/ramen_vending_machine.glb");
