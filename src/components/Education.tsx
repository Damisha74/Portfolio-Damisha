import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2026 (Expected)</p>
          <h2 className="text-2xl md:text-3xl font-bold">University of Moratuwa</h2>
        </div>
        <div className="mt-6 lgl:mt-1 w-full h-[200px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc(Hons) in Information Technology"
            result=" CGPA - 3.54"
            des="L2S2 SGPA - 3.90(Dean's List)"
          />
        </div>
      </div>

      {/* part two (combined AL & OL) */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2011 - 2018</p>
          <h2 className="text-2xl md:text-3xl font-bold">Taxila Central College, Horana</h2>
        </div>
        <div className="mt-6 lgl:mt-1 w-full h-[200px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="GCE Advanced Level"
            result=" Z-score - 1.5153"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
