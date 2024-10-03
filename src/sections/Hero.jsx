import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";

import { OrbitControls } from "@react-three/drei";
import { useState } from "react";
import Developer from "../components/Developer.jsx";
import CanvasLoader from "../components/Loading.jsx";
import { calculateSizes } from "../constants/index.js";

const Hero = () => {
  const [animationName, setAnimationName] = useState("idle");
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  const handleAnimationChange = (name) => {
    setAnimationName(name);
  };

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Soab
        </p>
        <p className="hero_tag text-gray_gradient">
          Building 3d Products & Brands
        </p>
      </div>

      <div className="experience absolute inset-0">
        <Canvas className="w-full h-full ">
          <ambientLight intensity={7} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

          <Suspense fallback={<CanvasLoader />}>
            <Developer
              position-y={-2.5}
              scale={2}
              animationName={animationName}
            />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <div className="flex justify-center space-x-4">
          {["Idle", "Salute", "Clapping", "Victory"].map((name) => (
            <button
              key={name}
              onClick={() => handleAnimationChange(name.toLowerCase())}
              onPointerOver={() => handleAnimationChange(name.toLowerCase())}
              onPointerOut={() => handleAnimationChange("idle")}
              className={`${animationName === name.toLowerCase() ? "text-white" : "text-gray-400"} text-xl font-generalsans`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
