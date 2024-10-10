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
        <div className="text p-10 text-justify xl:w-1/2">
          <h1 className="text-2xl  font-bold bg-gradient-to-r from-cyan-500 from-10% via-violet-500 via-50% to-violet-100 text-transparent bg-clip-text">
            Soab Mahmud Syfuddhin
          </h1>
          <h1 className="text-lg text-gray-600 font-bold">
            Web Application Developer
          </h1>
          <p className="text-gray-400 mt-5 text-md bg-gradient-to-br from-cyan-500 from-10%  to-violet-400 text-transparent bg-clip-text">
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
          <button className="download mt-10  tracking-widest uppercase text-sm">
            download cv
          </button>
        </div>
      </div>
      <style jsx>
        {`
          @property --angle {
            syntax: "<angle>";
            inherits: false;
            initial-value: 0deg;
          }

          .download {
            height: 50px;
            width: 200px;
            border: none;
            border-radius: 10px;
            color: white;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            transition: 0.5s;
            cursor: pointer;
            position: relative;
            background: black;
            display: flex;
            padding: 10px;
            align-items: center;
            justify-content: center;
          }
          .download:before,
          .download:after {
            content: "";
            position: absolute;
            width: 104%;
            height: 110%;
            border-radius: inherit;
            background-image: conic-gradient(
              from var(--angle),
              #002bff,
              #7a00ff,
              #ff00c8,
              aqua
            );
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            z-index: -1;
            animation: rotate 4s linear infinite;
          }
          .download:after {
            filter: blur(14px);
          }

          .download:hover:before,
          .download:hover:after {
            animation-play-state: paused;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }
          .download:hover {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }
          @keyframes rotate {
            0% {
              --angle: 0deg;
            }
            100% {
              --angle: 360deg;
            }
          }
        `}
      </style>
    </section>
  );
}
