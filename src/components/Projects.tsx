import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { projectOne, projectThree, projectTwo, projectFour, projectFive } from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title des="My Projects" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="FieldMaster (Group)"
            des="A mobile and web-based application designed to assist users in measuring land area. The app provides functionality for plantation planning, fertilization, fence creation, and effort calculation based on the measured area. The goal is to streamline land management tasks."
            src={projectOne}
            githubLink="https://github.com/Damisha74/FieldMaster"
            liveLink="https://field-master-frontend.vercel.app/"
            technologies={["React", "Node.js", "MongoDB", "Express", "React Native"]}
          />
          <ProjectsCard
            title="Queens of Cake (Group)"
            des="A scalable cake-ordering platform developed using a microservice architecture. This system enables users to place cake orders online with a seamless, user-friendly interface. The platform is built to be modular, making it easily adaptable for future updates and improvements."
            src={projectThree}
            githubLink="https://github.com/Damisha74"
            liveLink="#"
            technologies={["React", "Node.js", "Express", "MongoDB", "Docker"]}
          />
          <ProjectsCard
            title="Portfolio (Individual)"
            des="A personal portfolio website designed to showcase my software development skills and projects. It features smooth animations, a responsive layout, and live access through deployment on Vercel. The portfolio is crafted to provide an engaging and professional experience for visitors."
            src={projectFive}
            githubLink="https://github.com/Damisha74"
            liveLink="#"
            technologies={["React", "Vite", "Tailwind CSS", "Framer Motion"]}
          />
          <ProjectsCard
            title="Melodify (Individual)"
            des="A React Native app using Deezer API for discovering and listening to music. Features include secure user authentication, a music player, track search, and play count tracking. It has a dark-themed UI, responsive layout, and session management with AsyncStorage."
            src={projectFour}
            githubLink="https://github.com/Damisha74/Melodify"
            liveLink="#"
            technologies={["React Native", "Deezer API", "AsyncStorage"]}
          />
          <ProjectsCard
            title="Automated Water Purifying System (Group)"
            des="A microcontroller-based system that automates the water purification process while providing real-time monitoring of water quality. This system ensures clean water by regulating various parameters like turbidity, temperature, and pH, thus enhancing water treatment efficiency."
            src={projectTwo}
            githubLink="#"
            liveLink="#"
            technologies={["Arduino IDE", "Arduino cloud", "Sensors", "Microcontroller"]}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
