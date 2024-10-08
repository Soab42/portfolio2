import { Canvas, useFrame } from "@react-three/fiber";
import Dev from "../components/Dev";
import {
  Environment,
  OrbitControls,
  PresentationControls,
  SpotLight,
} from "@react-three/drei";

export default function About() {
  return (
    <section id="about">
      <div className="flex items-center justify-center my-10">
        <h1 className="text-white text-4xl font-bold relative">
          <span className="size-6 mr-3 animate-ping inline-block bg-cyan-500 rounded-full absolute -left-8 top-3"></span>
          <span className="size-4 mr-3  inline-block bg-cyan-500 rounded-full absolute -left-7 top-4"></span>
          Discovered About
          <span className="text-cyan-500"> Myself</span>
        </h1>
      </div>
      <div className="about flex flex-col xl:flex-row justify-center items-center relative h-full">
        <div className="image xl:h-[70vh] xl:w-[30vw]">
          <Canvas className="w-full h-full">
            <ambientLight />
            {/* <OrbitControls enableZoom={false} /> */}
            <ambientLight intensity={2} />
            <PresentationControls
              global
              config={{ mass: 2, tension: 500 }}
              snap={{ mass: 4, tension: 1500 }}
              rotation={[0.2, 0.3, 0]}
              polar={[-Math.PI / 3, Math.PI / 3]}
              azimuth={[-Math.PI / 1.4, Math.PI / 2]}
            >
              <Dev scale={3} position={[0, -2.5, 0]} />
            </PresentationControls>
          </Canvas>
        </div>
        <div className="text p-10 text-justify w-1/2">
          <h1 className="text-3xl  font-bold bg-gradient-to-r from-cyan-500 from-10% via-violet-500 via-50% to-violet-100 text-transparent bg-clip-text">
            Soab Mahmud Syfuddhin
          </h1>
          <h1 className="text-md text-gray-600 font-bold">
            Web Application Developer
          </h1>
          <p className="text-gray-400 mt-5 text-xl bg-gradient-to-br from-cyan-500 from-10%  to-violet-400 text-transparent bg-clip-text">
            I am a dedicated{" "}
            <span className="marker">web application developer</span> with a
            passion for creating digital experiences that leave a mark Beyond
            the screen,
            <br />
            <br />
            I'm a sports enthusiast, finding joy in playing cricket and football
            under the open sky. Traveling is my escape, as it exposes me to
            diverse cultures and fuels my creativity. Writing is not just a
            skill; it's an art form I cherish.
            <br />
            <br /> <span className="marker">Honesty</span> is my cornerstone,
            and <span className="marker">teamwork</span> is my strength.I'm a
            diligent, <span className="marker">quick learner </span> who thrives
            on challenges and embraces them as opportunities.
            <br />
            <br />
            My hunger for knowledge is insatiable, and I relish acquiring new
            skills and exploring the ever-evolving world of web development.
            Every day is a chance to grow and innovate.
          </p>
          <button className="educationCard mt-6 bg-clip-text tracking-widest  font-black  uppercase ">
            download cv
          </button>
        </div>
      </div>
    </section>
  );
}
