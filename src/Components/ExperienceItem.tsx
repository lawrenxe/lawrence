import React from "react";
import SkillTag from "./SkillTag";
import { ExperienceType } from "../static/Experience";

interface EIProps {
  experience: ExperienceType;
}

const ExperienceItem = ({ experience }: EIProps) => {
  return (
    <div className="flex flex-col w-full gap-5 mb-6 bg-white border p-5 border-black border-2 shadow-solid-4">
      <div className="flex flex-col">
        <div className="w-full flex flex-row items-end justify-between">
          <h1 className="text-2xl font-sans font-bold ">
            {experience.workplace}
          </h1>
          <h2 className="text-xl font-sans font-bold">{experience.location}</h2>
        </div>
        <div className="w-full flex flex-row items-end justify-between">
          <h2 className="text-xl font-sans font-medium italic">
            {experience.title}
          </h2>
          <h2 className="text-lg font-sans font-medium italic">
            {experience.period}
          </h2>
        </div>
      </div>

      <div className="flex flex-col px-5 gap-2 text-lg">
        <p className="font-medium">
          {experience.workItems.map((item) => {
            return (
              <div className="flex flex-row gap-3">
                {" "}
                <p className="w-fit">·</p> <p>{item}</p>{" "}
              </div>
            );
          })}
        </p>
      </div>

      <div className="ml-5">
        {experience.skills.map((skill) => {
          return <SkillTag>{skill}</SkillTag>;
        })}
      </div>
    </div>
  );
};

export default ExperienceItem;
