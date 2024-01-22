"use client";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Experience } from "../typings";
import Image from "next/image";

type Props = { experience: Experience };

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className=" flex flex-col rounded-t-full md:rounded-3xl items-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:[900px] bg-[#292929] snap-center p-10 hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 -mt-10 md:mt-0 ">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="w-32 h-32 rounded-full  object-cover object-center "
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />
      <div className="w-full px-10 md:px-24 text-center">
        <h4 className="text-2xl font-light ">{experience?.jobTitle}</h4>
        <p className="font-bold text-lg mt-1 ">{experience?.company}</p>
        <div className="flex space-x-2 my-2 justify-center">
          {experience?.technologies.map((technology) => (
            <Image
              key={technology._id}
              className=" rounded-full object-cover"
              src={urlFor(technology?.image).url()}
              alt=""
              height={20}
              width={20}
            />
          ))}

          <motion.img
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="invisible md:visible xl:invisible xl:h-0 xl:w-0 h-0 w-0 md:h-0 md:w-0  rounded-full mb-0 object-cover object-center"
            src={urlFor(experience?.companyImage).url()}
            alt=""
          />
        </div>
        <p className="uppercase py-2 text-gray-500 text-sm ">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>
      </div>
      <ol className=" px-0 md:px-10 font-mono list-disc space-y-5 text-sm md:text-lg overflow-y-scroll scrollbar-thin scrollbar-track-[#272727] scrollbar-thumb-slate-500">
        {experience?.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ol>
    </article>
  );
}
