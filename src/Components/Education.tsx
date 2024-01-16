import React, { useEffect, useState } from "react";
import EducationItem from "./EducationItem";
import Transition from "./Transition";
import educations from "../static/Education";

interface EProps {
  setATRequest: (isAtRequest: boolean) => void;
}

const Education = ({ setATRequest }: EProps) => {
  const [loaded, setLoaded] = useState(false);
  const handleLoad = () => {
    setLoaded(true);
  };
  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="flex flex-col">
      {educations.map((education, index) => {
        return (
          <Transition
            key={index}
            time={1000}
            delay={150 * index}
            loaded={loaded}
          >
            <EducationItem education={education} />
          </Transition>
        );
      })}

      <Transition key={"button"} time={1000} delay={300} loaded={loaded}>
        <div
          className="bg-white w-fit  border-black border-2 px-2 py-1 font-bold hover:cursor-pointer hover:shadow-solid-4 text-sm"
          onClick={() => {
            setATRequest(true);
          }}
        >
          Get a copy of my Transcript
        </div>
      </Transition>
    </div>
  );
};

export default Education;
