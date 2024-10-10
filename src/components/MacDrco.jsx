import { useSpring } from "@react-spring/core";
import { a as three } from "@react-spring/three";
import { a as web } from "@react-spring/web";
import {
  ContactShadows,
  Environment,
  Float,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import useSize from "../hooks/useSize";
import CanvasLoader from "./Loading";
import Mac from "./Mac";

export default function MacDraco({ link }) {
  // This flag controls open state, alternates between true & false
  const [open, setOpen] = useState(true);
  const { isMobile, isTablet } = useSize();
  const model = useGLTF("/models/3d/mac_draco.glb");

  // We turn this into a spring animation that interpolates between 0 and 1
  const props = useSpring({ open: Number(open) });
  return (
    <web.main
      className="h-full"
      style={{
        background: props.open.to([0, 1], ["#fff0", "rgb(124 58 237 / 0.2)"]),
      }}
    >
      <Canvas dpr={[1, 2]} camera={{ position: [-10, 0, -30], fov: 35 }}>
        <pointLight
          position={[10, 10, 10]}
          intensity={0}
          color={props.open.to([0, 1], ["#f0f0f0", "#d25578"])}
        />
        <OrbitControls
          enableRotate={false}
          enablePan={false}
          enableZoom={true}
          maxZoom={0.01}
          minZoom={0.01}
        />
        {/* <OrbitControls /> */}
        <Suspense fallback={<CanvasLoader />}>
          <Float speed={4} rotationIntensity={0.1} floatIntensity={0.1}>
            <group
              rotation={[0, Math.PI, 0]}
              onClick={(e) => (e.stopPropagation(), setOpen(!open))}
            >
              <Mac
                model={model}
                scale={1}
                position={
                  isMobile ? [5, -3, 10] : isTablet ? [4, -3, 10] : [0, -3, 0]
                }
                open={open}
                hinge={props.open.to([0, 1], [1.575, -0.425])}
                link={link}
              />
            </group>
          </Float>
        </Suspense>
        <Environment preset="dawn" />
        <ContactShadows
          position={[0, -4.5, 0]}
          opacity={0.4}
          scale={20}
          blur={1.75}
          far={4.5}
        />
      </Canvas>
    </web.main>
  );
}
useGLTF.preload("/models/3d/mac_draco.glb");
