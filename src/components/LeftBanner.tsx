import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaMedium, FaLinkedinIn, FaReact, FaNodeJs } from "react-icons/fa";
import {  SiFigma,  } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

import { FadeIn } from "./FadeIn";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["IT Undergraduate.", "Full Stack Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME</h4>
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Damisha Wickramaarachchi</span>
        </h1>
        <h2 className="text-3xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#6a329f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider">
          I am a third year IT undergraduate at the University of Moratuwa. I am
          passionate about Full Stack Development.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://medium.com/@damishat99" target="_blank">
              <span className="bannerIcon">
                <FaMedium />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/damisha-wickramaarachchi-4159ba272/"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a href="https://github.com/Damisha74" target="_blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <DiMongodb />
            </span>
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default LeftBanner;
