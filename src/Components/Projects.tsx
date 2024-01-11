import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
import ProjectCard from "./ProjectCard";
import projects from "../static/Project";

interface PProps {
  setProjectSelected: (project: string) => void;
}

const Projects = ({ setProjectSelected }: PProps) => {
  return (
    <div className="w-full h-full relative">
      <div className={`grid grid-cols-3 gap-4 w-full h-full`}>
        {projects.map((project, index) => {
          return (
            <ProjectItem
              project={project}
              setProjectSelected={setProjectSelected}
            />
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
