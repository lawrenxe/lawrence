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
      className="bg-white  w-full relative flex flex-col px-4 py-6 lg:aspect-[2/3] border-solid border-black border-2 hover:shadow-solid-4 hover:cursor-pointer rounded-md shadow-solid-4"
      onClick={() => setProjectSelected(project.projectId)}
    >
      <img
        src={project.titleImgUrl ? project.titleImgUrl : project.imgUrls[0]}
        className="w-full aspect-[4/3] bg-gray-200 mb-4 object-cover"
      />
      <div className="font-bold text-md lg:text-lg ">{project.name}</div>

      <div className="w-full">
        {project.skills.map((skill, index) => {
          return <SkillTag key={index}>{skill}</SkillTag>;
        })}
      </div>
    </div>
  );
};

export default ProjectItem;
