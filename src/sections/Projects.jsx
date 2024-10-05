import { useState } from "react";
import { getTech, projects } from "../constants";

import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import MacDraco from "../components/MacDrco";
import IphoneModel from "../components/IphoneDemo";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import CanvasLoader from "../components/Loading";
import SamsungModel from "../components/SamsungModel";
export default function ProjectsList() {
  const [project, setProject] = useState(0);
  const parentRef = useRef(null); // Reference to the parent container
  useEffect(() => {
    // Staggered animation for each child of the parent container
    gsap.fromTo(
      parentRef.current.children,
      { opacity: 0, y: 50 }, // Initial state (hidden and slightly below)
      {
        opacity: 1, // Final state (fully visible)
        y: 0, // Bring it back to the original position
        stagger: 1, // Delay between the appearance of each child (0.2 seconds)
        ease: "power3.inOut", // Smooth easing for the animation
        duration: 1, // Duration of each animation
      }
    );
  }, [project]); // Re-trigger the animation when the project changes

  return (
    <section
      className="min-h-screen h-full backdrop-blur-xl w-full  relative overflow-hidden "
      id="projects"
    >
      <div className="absolute w-full h-full">
        <div className="bg-violet-400 w-[30rem] h-3 rotate-[135deg] top-[20rem] -right-20 absolute blur-2xl"></div>
        <div className="bg-violet-400 w-[30rem] h-3 rotate-[135deg] top-[40rem] -right-40 absolute blur-2xl shadow-xl shadow-violet-400"></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-1">
        <div className="flex items-center justify-center mt-12">
          <h1 className="text-white text-4xl font-bold relative">
            <span className="size-6 mr-3 animate-ping inline-block bg-sky-500 rounded-full absolute -left-8 top-3"></span>
            <span className="size-4 mr-3  inline-block bg-sky-500 rounded-full absolute -left-7 top-4"></span>
            Portfolio <span className="text-sky-300">that enlightens</span>
          </h1>
        </div>
      </div>
      <div className="main w-full flex flex-col xl:flex-row  items-center justify-between absolute inset-0 p-4 mt-24">
        <div className="w-full h-1/2 xl:h-full p-4  xl:order-1 order-2">
          <div
            className="w-full h-full flex flex-col  justify-between gap-4"
            ref={parentRef}
          >
            <div className="flex flex-col gap-4">
              <h1>{projects[project].title}</h1>
              <p>{projects[project].description}</p>
              <div className="">
                <p className="">Features</p>
                {projects[project].features.map((feature) => (
                  <li key={feature} className="text-gray-500 pl-5">
                    {feature}
                  </li>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 ">
                {projects[project].technology.map((tech) => (
                  <div key={tech} className="flex items-center gap-4">
                    <img
                      src={getTech(tech)?.image}
                      alt="tech"
                      className="w-10"
                    />
                    <p className="text-gray-500">{getTech(tech)?.title}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center gap-4">
                <button
                  onClick={() => {
                    setProject(
                      (project) =>
                        (project - 1 + projects.length) % projects.length
                    );
                  }}
                >
                  <img
                    src="/icon/icons8-arrow-96.png"
                    alt="leftArrow"
                    className="rotate-180 h-16"
                  />
                </button>
                <div>
                  <a
                    href={projects[project].github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-white bg-violet-500 px-4 py-2 rounded-full">
                      View Source
                    </button>
                  </a>
                  <a
                    href={projects[project].link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-white bg-violet-500 px-4 py-2 rounded-full">
                      Go Live
                    </button>
                  </a>
                </div>
                <button
                  onClick={() => {
                    setProject((project) => (project + 1) % projects.length);
                  }}
                >
                  <img
                    src="/icon/icons8-arrow-96.png"
                    alt="leftArrow"
                    className="h-16"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:h-full h-1/2 order-1">
          {projects[project]?.isMobile ? (
            <Canvas className="bg-pink-400/20">
              <Environment preset="dawn" />
              <OrbitControls
                enableZoom={true}
                autoRotate={true}
                autoRotateSpeed={5.5}
                setPolarAngle={Math.PI / 2}
              />
              <Suspense fallback={<CanvasLoader />}>
                {projects[project]?.isFlutter ? (
                  <IphoneModel
                    rotation={[0, -Math.PI / 2 - 0.2, 0]}
                    position={[0, -1.5, 0]}
                    scale={19.5}
                    imageLink={projects[project]?.imageLink}
                  />
                ) : (
                  <SamsungModel imageLink={projects[project]?.imageLink} />
                )}
              </Suspense>
            </Canvas>
          ) : (
            <MacDraco link={projects[project]?.link} />
          )}
        </div>
      </div>
    </section>
  );
}
