"use client";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import ExperienceCard from "./ExperienceCard";

type Props = { experiences: Experience[] };

export default function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen  flex relative overflow-hidden flex-col text-left md:flex-row max-w-full  mx-auto justify-center "
    >
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl items-center text-center">
        Experience
      </h3>

      {/* Experience cards */}
      <div className="w-full h-4/5 md:h-5/6  flex content-center  overflow-x-scroll p-10 space-x-5 snap-x snap-center snap-mandatory scrollbar-thin scrollbar-track-[#2d2c2c] scrollbar-thumb-darkGreen/80 mt-16 md:mt-24 ">
        {/* <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-[#2d2c2c] scrollbar-thumb-darkGreen/80 "> */}
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}
