import React from "react";
import SkillTag from "./SkillTag";
import { ProjectType } from "../static/Project";

interface PIProps {
  setProjectSelected: (project: string) => void;
  project: ProjectType;
}

const ProjectItem = ({ setProjectSelected, project }: PIProps) => {
  const skills = ["React.js", "Tailwind", "Flask", "CSS", "TypeScript"];

  return (
    <div
      className="w-full relative flex flex-col px-4 py-6 border-solid border-black border-2 hover:shadow-solid-4 hover:cursor-pointer"
      onClick={() => setProjectSelected(project.projectId)}
    >
      <img
        src={project.titleImgUrl ? project.titleImgUrl : project.imgUrls[0]}
        className="w-full aspect-[4/3] bg-yellow-300 mb-4 object-cover"
      />
      <div className="font-bold text-md lg:text-lg ">{project.name}</div>

      <div className="w-full">
        {project.skills.map((skill) => {
          return <SkillTag>{skill}</SkillTag>;
        })}
      </div>
    </div>
  );
};

export default ProjectItem;
