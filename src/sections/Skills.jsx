import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import CanvasLoader from "../components/Loading";
import ScifiFan from "../components/ScifiFan";
import TechCard from "../components/TechCard";
import { techStack } from "../constants";

export default function TechStack() {
  const groupRef = useRef(null);
  return (
    <div className="relative  min-h-[100vh] h-full grid" id="skills">
      <div className="">
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-1">
          <div className="flex items-center justify-center mt-32">
            <h1 className="text-white text-4xl font-bold relative">
              <span className="size-6 mr-3 animate-ping inline-block bg-sky-500 rounded-full absolute -left-8 top-3"></span>
              <span className="size-4 mr-3  inline-block bg-blue-500 rounded-full absolute -left-7 top-4"></span>
              Tech Stack <span className="text-blue-500">Learned</span>
            </h1>
          </div>
        </div>
        {/* <img src="public/icon/backgroundDefault.jpg" alt="bg" className='absolute top-0 left-0 z-0 w-full h-full object-cover opacity-50' /> */}
        <Canvas className="absolute top-0 left-0 z-1 w-full h-full object-cover">
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              autoRotate={true}
              autoRotateSpeed={2}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
              maxDistance={10}
              minDistance={-10}
            />

            <PerspectiveCamera makeDefault position={[0, 10, 10]} />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={10} />
            <directionalLight position={[-10, -10, -10]} intensity={10} />
            <group
              rotation={[-4.5, 0, 0]}
              position={[0, 0, 0]}
              scale={1.2}
              ref={groupRef}
            >
              {/* <ScifiFan position={[0, 0, 1]} rotation={[-1.6, 0, 0]} /> */}

              {techStack.map((tech, index) => {
                const angle = (index / techStack.length) * Math.PI * 2; // Calculate based on techStack length
                const radius = 2;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                const z = 0;
                return (
                  <TechCard
                    key={index}
                    position={[x, y, z]}
                    rotation={[0, 0, angle - Math.PI / 2]}
                    scale={[0.6, 0.6, 0.6]}
                    title={tech.title}
                    description={tech.description}
                    skill={tech.skill}
                    image={tech.image}
                  />
                );
              })}
            </group>
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
