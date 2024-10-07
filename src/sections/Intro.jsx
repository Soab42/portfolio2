import { useGSAP } from "@gsap/react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import React, { Suspense, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import CanvasLoader from "../components/Loading.jsx";
import RoboticsPlayground from "../components/RoboticsPlayground.jsx";
import useSize from "../hooks/useSize.jsx";
export default function Intro() {
  const videoRef = useRef(null);
  const heroTagRef = useRef(null);
  const heroHeadTagRef = useRef(null);
  const { sizes, isSmall, isMobile, isTablet } = useSize();
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [videoRef]);

  useGSAP(() => {
    gsap.fromTo(
      heroTagRef.current,
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1,
        ease: "power3.inOut",
      }
    );

    gsap.fromTo(
      heroHeadTagRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        delay: 1.5,
        ease: "power3.inOut",
      }
    );

    const text = heroHeadTagRef.current.textContent;
    heroHeadTagRef.current.innerHTML = "";
    [...text].forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.opacity = "0";
      heroHeadTagRef.current.appendChild(span);
      gsap.fromTo(
        span,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.05,
          delay: 1.5 + index * 0.05,
        }
      );
    });
  }, []);

  return (
    <section
      className="min-h-screen h-full w-full flex items-center flex-col relative"
      id="home"
    >
      <video
        onEnded={() => {
          videoRef.current.play();
        }}
        ref={videoRef}
        src="/video/121885-724720140.mp4"
        className="w-screen h-screen absolute z-[-1] object-cover opacity-10"
        autoPlay
        muted
      />

      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-48 c-space gap-3">
        <p
          ref={heroTagRef}
          className="sm:text-3xl text-xl font-medium text-transparent text-center font-generalsans bg-clip-text bg-gradient-to-l from-blue-400 to-pink-500"
        >
          Hi, I am Soab Mahmud
        </p>
        <p
          ref={heroHeadTagRef}
          className="hero_tag text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
        >
          Building 3d Products & Brands
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls enableZoom={false} />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <RoboticsPlayground
              scale={isMobile ? 4 : 6}
              position={isMobile ? [0, -5, 0] : [0, -8, 0]}
              isMobile={isMobile}
            />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-5 rounded-full text-transparent bg-clip-text bg-gradient-to-l from-violet-900  to-blue-500  flex  gap-2 items-center justify-center p-2 text-xl font-semibold">
        <div className="size-2 bg-green-500 rounded-full animate-ping"></div>
        <Link to={"#contact"} className="text-center text-lg">
          Lets work together
        </Link>
      </div>
    </section>
  );
}
