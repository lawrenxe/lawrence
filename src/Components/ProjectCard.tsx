import React, { useEffect, useState } from "react";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import SkillTag from "./SkillTag";
import Project, { ProjectType } from "../static/Project";
import Transition from "./Transition";

interface PCProps {
  project: ProjectType;
}

const ProjectCard = ({ project }: PCProps) => {
  const [loaded, setLoaded] = useState(false);
  const handleLoad = () => {
    setLoaded(true);
  };
  useEffect(() => {
    handleLoad();
  }, []);
  const gridColumn = project.imgUrls.length;

  return (
    <div className="flex flex-col gap-y-8 w-full h-full overflow-y-auto">
      <div className="flex flex-col gap-y-2 w-full">
        <div className="flex flex-row items-center gap-x-3">
          <h1 className="text-3xl font-bold">{project.name}</h1>

          {project.url && (
            <a href={project.url} target="_blank">
              <FaExternalLinkAlt size={15} className="hover:cursor-pointer" />
            </a>
          )}
          {project.gitHubUrl && (
            <a href={project.gitHubUrl} target="_blank">
              <FaGithub size={20} className="hover:cursor-pointer" />
            </a>
          )}
        </div>

        <div>
          {project.skills.map((skill, index) => {
            return <SkillTag key={skill}>{skill}</SkillTag>;
          })}
        </div>
      </div>
      {project.youtubeUrl && (
        <iframe
          className="w-3/4 aspect-[16/9]"
          src={project.youtubeUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      )}
      {!project.youtubeUrl && project.imgUrls && (
        <div className={` gap-2 grid grid-cols-${gridColumn} w-3/4`}>
          {project.imgUrls.map((imgUrl, index) => {
            return <img className="w-" key={index} src={imgUrl} />;
          })}
        </div>
      )}

      {project.description}
    </div>
  );
};

export default ProjectCard;
