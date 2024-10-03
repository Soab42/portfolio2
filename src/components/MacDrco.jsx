import { useSpring } from "@react-spring/core";
import { a as three } from "@react-spring/three";
import { a as web } from "@react-spring/web";
import { ContactShadows, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import useSize from "../hooks/useSize";
export default function App({ link }) {
  // This flag controls open state, alternates between true & false
  const [open, setOpen] = useState(true);
  const { isMobile, isTablet } = useSize();
  // We turn this into a spring animation that interpolates between 0 and 1
  const props = useSpring({ open: Number(open) });
  return (
    <web.main
      className="h-full"
      style={{
        background: props.open.to([0, 1], ["#fff0", "rgba(14, 165, 233,.3)"]),
      }}
    >
      <Canvas dpr={[1, 2]} camera={{ position: [-10, 0, -30], fov: 35 }}>
        <three.pointLight
          position={[10, 10, 10]}
          intensity={0}
          color={props.open.to([0, 1], ["#f0f0f0", "#d25578"])}
        />

        {/* <OrbitControls /> */}
        <Suspense fallback={null}>
          <group
            rotation={[0, Math.PI, 0]}
            onClick={(e) => (e.stopPropagation(), setOpen(!open))}
          >
            <Mac
              scale={1}
              position={
                isMobile ? [5, -3, 10] : isTablet ? [4, -3, 10] : [0, -3, 0]
              }
              open={open}
              hinge={props.open.to([0, 1], [1.575, -0.425])}
              link={link}
            />
          </group>
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