import React from "react";
import SkillTag from "./SkillTag";
import { ExperienceType } from "../static/Experience";

interface EIProps {
  experience: ExperienceType;
}

const ExperienceItem = ({ experience }: EIProps) => {
  return (
    <div className="flex flex-col w-full gap-2 mb-4 bg-white p-3 border-black border-2 shadow-solid-4">
      <div className="flex flex-col w-full">
        <div className="w-full md:flex md:flex-row items-end justify-between">
          <h1 className="text-md lg:text-lg xl:text-xl font-sans font-bold">
            {experience.workplace}
          </h1>
          <h2 className="text-md lg:text-lg xl:text-xl font-sans font-bold">
            {experience.location}
          </h2>
        </div>
        <div className="w-full md:flex md:flex-row items-end justify-between">
          <h2 className="text-sm lg:text-md xl:text-lg font-sans font-medium italic">
            {experience.title}
          </h2>
          <h2 className="text-sm lg:text-md xl:text-lg font-sans font-medium italic">
            {experience.period}
          </h2>
        </div>
      </div>

      <div className="flex flex-col text-xs lg:text-sm xl:text-md">
        <p className="font-medium">
          {experience.workItems.map((item) => {
            return (
              <div className="flex flex-row gap-1">
                {" "}
                <p className="w-fit">·</p> <p>{item}</p>{" "}
              </div>
            );
          })}
        </p>
      </div>

      <div className="">
        {experience.skills.map((skill) => {
          return <SkillTag>{skill}</SkillTag>;
        })}
      </div>
    </div>
  );
};

export default ExperienceItem;
