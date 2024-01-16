import React from "react";
import unimelb from "../assets/unimelb.png";
import { EducationType } from "../static/Education";

interface EIProps {
  education: EducationType;
}

const EducationItem = ({ education }: EIProps) => {
  return (
    <div className="flex flex-col w-full gap-2 mb-4 bg-white p-3 border-black border-2 shadow-solid-4">
      <div className="flex flex-col">
        <div className="w-full md:flex md:flex-row items-end justify-between">
          <h1 className="text-md lg:text-lg xl:text-xl font-sans font-bold ">
            {education.school}
          </h1>
          <h2 className="text-sm lg:text-md xl:text-lg font-sans font-bold">
            {education.period}
          </h2>
        </div>

        <h2 className="text-sm lg:text-md xl:text-lg font-sans font-medium italic">
          {education.course}
        </h2>
      </div>

      <div className="flex flex-col text-xs lg:text-sm xl:text-md gap-2">
        <p className="font-medium">
          <span className="font-bold">GPA obtained: </span>
          {education.gpa}
        </p>
        {education.achieve && (
          <p className="font-medium">
            <span className="font-bold">Achievement:</span> {education.achieve}
          </p>
        )}
        <div>
          <p className="font-medium">
            <span className="font-bold">Subjects accomplished:</span>{" "}
            {education.subjects}
          </p>
        </div>
      </div>
      <img
        className="-mt-24 w-24 opacity-30 self-end"
        src={unimelb}
        alt="Unimelb Logo"
      />
    </div>
  );
};

export default EducationItem;
