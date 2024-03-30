import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiLinux,
  SiRedis,
  SiTailwindcss,
  SiNetlify,
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript, SiJquery } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap, BsWordpress } from "react-icons/bs";
import { FaJava } from "react-icons/fa";

export const Techstacks = () => {
  return (
    <>
      <div className='section main' data-aos='fade-right'>
        <h2 className='section__title different'>Skills</h2>
        <div className='techsection'>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <SiRedux />
            <h5>Redux</h5>
          </div>
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
        
          <div>
            <SiTailwindcss />
            <h5>Tailwindcss</h5>
          </div>
          
          
          <div>
            <SiNetlify />
            <h5>Netlify</h5>
          </div>

          <div>
            <SiLinux/>
            <h5>Linux</h5>
          </div>

          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
          
        </div>
      </div>
    </>
  );
};
