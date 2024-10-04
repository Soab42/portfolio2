import { a as three } from "@react-spring/three";
import { Html, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import useSize from "../hooks/useSize";

export default function Mac({ model, open, hinge, link, ...props }) {
  const { isMobile, isTablet } = useSize();
  const group = useRef();
  const modelRef = useRef();
  const linkRef = useRef();
  // Load model
  const { nodes, materials } = model;
  // Take care of cursor state on hover
  const [hovered, setHovered] = useState(false);
  useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered]
  );

  // Make it float in the air when it's opened
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      open ? Math.cos(t / 10) / 10 + 0.25 : 0,
      0.1
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      open ? Math.sin(t / 10) / 4 : 0,
      0.1
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      open ? Math.sin(t / 10) / 10 : 0,
      0.1
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      open ? (-2 + Math.sin(t)) / 3 : -4.3,
      0.1
    );
  });
  // The view was auto-generated by: https://github.com/pmndrs/gltfjsx
  // Events and spring animations were added afterwards
  useEffect(() => {
    if (link) {
      gsap.fromTo(
        modelRef.current.rotation,
        { x: 1.575 },
        { x: -0.425, y: 0, ease: "power3.inOut", duration: 1.5 }
      );
      gsap.fromTo(
        group.current.rotation,
        { y: -5.5 },
        { y: -0.04, ease: "power3.inOut", duration: 1.5 }
      );
      gsap.fromTo(
        linkRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          ease: "power3.inOut",
          delay: 0.8,
        }
      );
    }
  }, [link]);

  return (
    <group
      ref={group}
      {...props}
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}
      dispose={null}
    >
      <three.group
        rotation-x={hinge}
        position={[0, -0.04, 0.41]}
        ref={modelRef}
      >
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            material={materials.aluminium}
            geometry={nodes["Cube008"].geometry}
          />
          <mesh
            material={materials["matte.001"]}
            geometry={nodes["Cube008_1"].geometry}
          />
          <mesh
            material={materials["screen.001"]}
            geometry={nodes["Cube008_2"].geometry}
          >
            <Html
              position={
                isMobile ? [0, 0, 0] : isTablet ? [0, 0, 0] : [-0.5, 0, -0.1]
              } // Adjust the position to fit your screen
              rotation={[-Math.PI / 2, 0, 0]} // Ensure it is correctly aligned with the screen
              transform // Make sure it follows the 3D transform
              distanceFactor={2.6} // Adjust the size of the iframe based on the 3D space
              // zIndexRange={[10, 0]} // Ensure it renders on top
              scale={1} // Adjust the size
            >
              <iframe
                ref={linkRef}
                hidden={!open} // Show or hide the iframe
                src={link} // Website URL passed as the `link` prop
                style={{ width: "1300px", height: "840px", border: "none" }} // Adjust the size
              />
            </Html>
          </mesh>
        </group>
      </three.group>
      <mesh
        material={materials.keys}
        geometry={nodes.keyboard.geometry}
        position={[1.79, 0, 3.45]}
      />
      <group position={[0, -0.1, 3.39]}>
        <mesh
          material={materials.aluminium}
          geometry={nodes["Cube002"].geometry}
        />
        <mesh
          material={materials.trackpad}
          geometry={nodes["Cube002_1"].geometry}
        />
      </group>
      <mesh
        material={materials.touchbar}
        geometry={nodes.touchbar.geometry}
        position={[0, -0.03, 1.2]}
      ></mesh>
    </group>
  );
}
