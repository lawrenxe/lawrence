import React from "react";

interface EIProps {
  school: string;
  period: string;
  course: string;
  gpa: string;
  achieve?: string;
  subjects: string;
}

const EducationItem = ({
  school,
  period,
  course,
  gpa,
  achieve,
  subjects,
}: EIProps) => {
  return (
    <div className="flex flex-col w-full gap-5 mb-10">
      <div className="flex flex-col">
        <div className="w-full flex flex-row items-end justify-between">
          <h1 className="text-2xl font-sans font-bold ">{school}</h1>
          <h2 className="text-xl font-sans font-bold">{period}</h2>
        </div>

        <h2 className="text-xl font-sans font-medium italic">{course}</h2>
      </div>

      <div className="flex flex-col px-5 gap-2 text-lg">
        <p className="font-medium">
          <span className="font-bold">GPA obtained: </span>
          {gpa}
        </p>
        {achieve && (
          <p className="font-medium">
            <span className="font-bold">Achievement:</span> {achieve}
          </p>
        )}
        <div>
          <p className="font-medium">
            <span className="font-bold">Subjects accomplished:</span> {subjects}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationItem;
