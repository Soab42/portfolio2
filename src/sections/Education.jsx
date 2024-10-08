import { Canvas } from "@react-three/fiber";
import React from "react";
import { educations } from "../constants";

export default function Education() {
  return (
    <section id="education" className="p-4">
      <div className="flex items-center justify-center my-10">
        <h1 className="text-white text-4xl font-bold relative">
          <span className="size-6 mr-3 animate-ping inline-block bg-amber-500 rounded-full absolute -left-8 top-3"></span>
          <span className="size-4 mr-3  inline-block bg-amber-500 rounded-full absolute -left-7 top-4"></span>
          Certificate I Have <span className="text-amber-500">Earned</span>
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {educations.map((education) => (
          <div className="educationCard ">
            <a href={education.link} target="_blank">
              <p className="text-amber-400 font-semibold">{education.title}</p>
              <h1>{education.name}</h1>
              <p>{education.group}</p>
              <p>{education.duration}</p>
              <p className="text-amber-100">{education.institution}</p>
            </a>
            <img
              src={education.certificate}
              alt="certificate"
              className="absolute top-0 right-0 w-1/2 h-full object-cover p-2 -z-[1] opacity-50 rounded-xl"
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
        }
        .educationCard:before {
          content: "";
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          background: linear-gradient(
            45deg,
            #ff0000,
            #ff7300,
            #fffb00,
            #48ff00,
            #00ffd5,
            #002bff,
            #7a00ff,
            #ff00c8,
            #ff0000
          );
          background-size: 800%;
          border-radius: 8px;
          filter: blur(4px);
          animation: glowing 40s linear infinite;
          opacity: 0.5;
          transition: background-position 2s cubic-bezier(0.075, 0.82, 0.165, 1);
          z-index: -1;
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

        .educationCard:hover {
          color: white;
        }
        .educationCard:nth-child(1) {
          border-radius: 0 10px 0px 10px;
        }

        .educationCard:nth-child(1):hover {
          background-color: rgba(25, 255, 255, 0.1);
          scale: 1.02;
          transform: translateY(-10px) translateX(-10px);
          transition: all 0.5s ease;
        }

        .educationCard:nth-child(2) {
          border-radius: 10px 0 10px 0px;
        }

        .educationCard:nth-child(2):hover {
          background-color: rgba(25, 255, 255, 0.1);
          scale: 1.02;
          transform: translateY(-10px) translateX(10px);
          transition: all 0.5s ease;
        }
        .educationCard:nth-child(3) {
          border-radius: 10px 0px 10px 0;
        }
        .educationCard:nth-child(3):hover {
          background-color: rgba(25, 255, 255, 0.1);
          scale: 1.02;
          transform: translateY(10px) translateX(-10px);
          transition: all 0.5s ease;
        }
        .educationCard:nth-child(4) {
          border-radius: 0px 10px 0 10px;
        }

        .educationCard:nth-child(4):hover {
          background-color: rgba(25, 255, 255, 0.1);
          scale: 1.02;
          transform: translateY(10px) translateX(10px);
          transition: all 0.5s ease;
        }
      `}</style>
    </section>
  );
}
