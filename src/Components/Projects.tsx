import React, { useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";
import ProjectCard from "./ProjectCard";
import projects from "../static/Project";
import Transition from "./Transition";

interface PProps {
  setProjectSelected: (project: string) => void;
}

const Projects = ({ setProjectSelected }: PProps) => {
  const [loaded, setLoaded] = useState(false);
  const handleLoad = () => {
    setLoaded(true);
  };
  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="w-full h-full relative">
      <div className={`grid grid-cols-3 gap-4 w-full h-full`}>
        {projects.map((project, index) => {
          return (
            <Transition
              key={index}
              time={1000}
              delay={150 * index}
              loaded={loaded}
            >
              <ProjectItem
                project={project}
                setProjectSelected={setProjectSelected}
              />
            </Transition>
          );
        })}

        {/* <ProjectItem
          setProjectSelected={setProjectSelected}
          projectId="youtube"
        />
        <ProjectItem
          setProjectSelected={setProjectSelected}
          projectId="youtube"
        />
        <ProjectItem
          setProjectSelected={setProjectSelected}
          projectId="youtube"
        />
        <ProjectItem
          setProjectSelected={setProjectSelected}
          projectId="youtube"
        />
        <ProjectItem
          setProjectSelected={setProjectSelected}
          projectId="youtube"
        />
        <ProjectItem
          setProjectSelected={setProjectSelected}
          projectId="youtube"
        />
        <ProjectItem
          setProjectSelected={setProjectSelected}
          projectId="youtube"
        />
        <ProjectItem
          setProjectSelected={setProjectSelected}
          projectId="youtube"
        /> */}
      </div>
    </div>
  );
};

export default Projects;
