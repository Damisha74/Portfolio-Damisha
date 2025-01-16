import { motion } from "framer-motion";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaFigma, 
  FaJs,
  FaGitAlt,
  FaNodeJs
} from "react-icons/fa";
import { 
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 className="text-[#E34F26] text-3xl" /> },
    { icon: <FaCss3Alt className="text-[#1572B6] text-3xl" /> },
    { icon: <FaJs className="text-[#F7DF1E] text-3xl" /> },
    { icon: <SiTypescript className="text-[#3178C6] text-3xl" /> },
    { icon: <FaReact className="text-[#61DAFB] text-3xl" /> },
    { icon: <SiTailwindcss className="text-[#06B6D4] text-3xl" /> },
    { icon: <FaNodeJs className="text-[#339933] text-3xl" /> },
    { icon: <SiMongodb className="text-[#47A248] text-3xl" /> },
    { icon: <FaGitAlt className="text-[#F05032] text-3xl" /> },
    { icon: <FaFigma className="text-[#F24E1E] text-3xl" /> },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full"
    >
      <div className="py-12 font-titleFont flex flex-col gap-4">
        <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            key={index}
            className="flex justify-center items-center p-3 bg-black bg-opacity-20 rounded-lg hover:bg-opacity-30 duration-300"
          >
            {skill.icon}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;