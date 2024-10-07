import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <section className="z-50 flex max-w-7xl mx-auto text-gray_gradient justify-between items-center p-2 backdrop-blur-lg fixed px-10 w-full">
      <div className="flex items-center gap-2 justify-between">
        <Link to="">
          <h1 className="text-2xl  text-gray_gradient  font-bold">Soab</h1>
        </Link>
      </div>
      <div className="flex items-center gap-4 ">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
    </section>
  );
}
