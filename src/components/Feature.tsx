import { AiFillAppstore } from "react-icons/ai";
import {FaMobile,} from "react-icons/fa";
import {SiAntdesign } from "react-icons/si";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          <Card
            title="Web Development"
            des="Create dynamic and responsive websites using modern 
      web technologies to provide engaging user experiences."
            icon={<AiFillAppstore />}
          />
          <Card
            title="Mobile Development"
            des="Develop intuitive and feature-rich mobile applications with focusing on performance and user-friendly design."
            icon={<FaMobile />}
          />
          <Card
            title="UX Design"
            des="Design user interfaces with a focus on enhancing usability, accessibility, 
      and overall user satisfaction."
            icon={<SiAntdesign />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
