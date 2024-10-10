import { Canvas } from "@react-three/fiber";
import React from "react";
import { educations } from "../constants";

export default function Education() {
  return (
    <section id="education" className="p-4">
      <div className="flex items-center justify-center my-10">
        <h1 className="text-white text-4xl font-bold relative">
          <span className="size-6 mr-3 animate-ping inline-block bg-cyan-400 rounded-full absolute -left-8 top-3"></span>
          <span className="size-4 mr-3  inline-block bg-cyan-400 rounded-full absolute -left-7 top-4"></span>
          Certificate I Have <span className="text-cyan-400">Earned</span>
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-6 education">
        {educations.map((education) => (
          <div className="educationCard ">
            <a href={education.link} target="_blank">
              <p className="text-cyan-400 font-semibold">{education.title}</p>
              <h1>{education.name}</h1>
              <p>{education.group}</p>
              <p>{education.duration}</p>
              <p className="text-cyan-400">{education.institution}</p>
            </a>
            <img
              src={education.certificate}
              alt="certificate"
              className="absolute top-0 right-0 w-1/2 h-full object-cover p-2 -z-[1] opacity-80 rounded-xl"
            />{" "}
          </div>
        ))}
      </div>
      <style jsx>{`
        .educationCard {
          background-color: black;
          border: 1px solid rgba(25, 25, 250, 0.5);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          padding: 20px;
          position: relative;
          color: gray;
          font-size: 1.2rem;
          transition: all 0.5s ease;
          border-radius: 10px;
        }
        .educationCard:before,
        .educationCard:after {
          content: "";
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -5px;
          background: conic-gradient(
            from var(--angle),
            #ff7300 10%,
            #fffb00 20%,
            #48ff00 33%,
            #00ffd5 45%,
            #002bff 55%,
            #7a00ff 63%,
            #ff00c8 75%
          );
          background-size: 300%;
          border-radius: 8px;
          opacity: 0.5;
          animation: rotate 12s linear infinite;
          transition: background-position 4s cubic-bezier(0.075, 0.82, 1.165, 1);
          z-index: -1;
        }

        .educationCard:after {
          filter: blur(6px);
        }
        @keyframes glowing {
          0% {
            background-position: 0 0;
          }
          50% {
            background-position: 400% 0;
          }
          100% {
            background-position: 0 0;
          }
        }

        .educationCard:nth-child(1):hover {
          scale: 1.02;
          transform: translateY(-10px) translateX(-10px);
          transition: all 0.5s ease;
        }

        .educationCard:nth-child(2):hover {
          scale: 1.02;
          transform: translateY(-10px) translateX(10px);
          transition: all 0.5s ease;
        }

        .educationCard:nth-child(3):hover {
          scale: 1.02;
          transform: translateY(10px) translateX(-10px);
          transition: all 0.5s ease;
        }
        .educationCard:nth-child(4):hover {
          scale: 1.02;
          transform: translateY(10px) translateX(10px);
          transition: all 0.5s ease;
        }
      `}</style>
    </section>
  );
}
