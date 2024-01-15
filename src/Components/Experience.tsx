import ExperienceItem from "./ExperienceItem";
import experiences from "../static/Experience";
import Transition from "./Transition";
import { useEffect, useState } from "react";

const Experience = () => {
  const [loaded, setLoaded] = useState(false);
  const handleLoad = () => {
    setLoaded(true);
  };
  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="flex flex-col">
      {experiences.map((experience, index) => {
        return (
          <Transition time={1000} delay={150 * index} loaded={loaded}>
            <ExperienceItem experience={experience} />
          </Transition>
        );
      })}
    </div>
  );
};

export default Experience;
