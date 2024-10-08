import { useState } from "react";
import { getTech, projects } from "../constants";

import {
  ContactShadows,
  Environment,
  Float,
  OrbitControls,
  SpotLight,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { gsap } from "gsap";
import React, { Suspense, useEffect, useRef } from "react";
import IphoneModel from "../components/IphoneDemo";
import CanvasLoader from "../components/Loading";
import MacDraco from "../components/MacDrco";
import SamsungModel from "../components/SamsungModel";
export default function ProjectsList() {
  const [project, setProject] = useState(0);
  const parentRef = useRef(null); // Reference to the parent container
  const parentRef2 = useRef(null); // Reference to the parent container
  useEffect(() => {
    // Staggered animation for each child of the parent container
    gsap.fromTo(
      parentRef.current.children,
      { opacity: 0, y: 50 }, // Initial state (hidden and slightly below)
      {
        opacity: 1, // Final state (fully visible)
        y: 0, // Bring it back to the original position
        stagger: 0.2, // Delay between the appearance of each child (0.2 seconds)
        ease: "linear", // Smooth easing for the animation
        duration: 0.3, // Duration of each animation
      }
    );

    gsap.fromTo(
      parentRef2.current.children,
      { opacity: 0, x: 50 }, // Initial state (hidden and slightly below)
      {
        opacity: 1, // Final state (fully visible)
        x: 0, // Bring it back to the original position
        stagger: 0.3, // Delay between the appearance of each child (0.2 seconds)
        ease: "linear", // Smooth easing for the animation
        duration: 0.3, // Duration of each animation
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
            <span className="size-6 mr-3 animate-ping inline-block bg-emerald-500 rounded-full absolute -left-8 top-3"></span>
            <span className="size-4 mr-3  inline-block bg-emerald-500 rounded-full absolute -left-7 top-4"></span>
            Portfolio <span className="text-emerald-500">that enlightens</span>
          </h1>
        </div>
      </div>
      <div className="main w-full flex flex-col xl:flex-row  items-center justify-between absolute inset-0 p-4 mt-24">
        <div className="w-full h-1/2 xl:h-full p-4  xl:order-1 order-2 text-lg">
          <div className="w-full h-full flex flex-col  justify-between gap-4">
            <div className="flex flex-col gap-4" ref={parentRef}>
              <h1 className="text-3xl text-emerald-400 font-semibold">
                {projects[project].title}
              </h1>
              <p>{projects[project].description}</p>
              <div className="">
                <p className="text-emerald-400 text-xl">Features</p>
                {projects[project].features.map((feature) => (
                  <li key={feature} className="text-gray-500 pl-5">
                    {feature}
                  </li>
                ))}
              </div>
              <div className="">
                <p className="text-emerald-400 text-xl">Learnings</p>
                {projects[project]?.learnings?.map((feature) => (
                  <li key={feature} className="text-gray-500 pl-5">
                    {feature}
                  </li>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div
                ref={parentRef2}
                className="flex gap-4 mb-4 border-b border-dashed border-t border-teal-400 px-4 py-2 rounded-xl"
              >
                {projects[project].technology.map((tech) => (
                  <div key={tech} className="flex items-center gap-4">
                    <img
                      src={getTech(tech)?.image}
                      alt="tech"
                      className="w-8"
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
                    className="rotate-180 h-12"
                  />
                </button>
                <div className="flex gap-4">
                  <a
                    href={projects[project].github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="flex gap-2 text-teal-500 font-semibold ring-1 shadow-sm shadow-sky-600  px-4 py-2 rounded-full">
                      <img
                        width={25}
                        src="/icon/icons8-git-500.png"
                        alt="github"
                        className="shadow-sky-600 shadow-md bg-sky-400 p-1 rounded-full"
                      />{" "}
                      View Source
                    </button>
                  </a>
                  <a
                    href={projects[project].link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-teal-500 px-4 font-semibold py-2 items-center rounded-full relative flex ring-1 shadow-sm shadow-sky-600">
                      <span className="size-6 mr-2 animate-ping inline-block bg-red-500 rounded-full"></span>
                      <span className="size-3.5 mr-2  inline-block bg-red-500 rounded-full absolute left-5 top-3.5"></span>
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
                    className="h-12"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:h-full h-1/2 order-1">
          {projects[project]?.isMobile ? (
            <Canvas className="bg-violet-600/20">
              <Environment preset="dawn" />
              <OrbitControls enableZoom={true} maxZoom={2.5} />
              <Float speed={4} rotationIntensity={1} floatIntensity={1}>
                <Suspense fallback={<CanvasLoader />}>
                  {projects[project]?.isFlutter ? (
                    <IphoneModel
                      position={[0, -1.5, 0]}
                      scale={19.5}
                      imageLink={projects[project]?.imageLink}
                    />
                  ) : (
                    <SamsungModel
                      imageLink={projects[project]?.imageLink}
                      position={[1, -1.5, 0]}
                    />
                  )}
                </Suspense>
              </Float>
              <ContactShadows
                position={[0, -2.5, 0]}
                opacity={0.9}
                scale={25}
                blur={1}
                far={2.5}
              />
            </Canvas>
          ) : (
            <MacDraco link={projects[project]?.link} />
          )}
        </div>
      </div>
    </section>
  );
}
