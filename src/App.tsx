import React, { ReactNode, useEffect, useState } from "react";

import "./App.css";
import Layout from "./Components/Layout";
import Lawrence from "./Components/Lawrence";
import Education from "./Components/Education";

import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import ProjectCard from "./Components/ProjectCard";
import Experience from "./Components/Experience";
import PopupWindow from "./Components/PopupWindow";
import ATRequest from "./Components/ATRequest";
import LeaveAMessage from "./Components/LeaveAMessage";
import projects, { ProjectType } from "./static/Project";
import Transition from "./Components/Transition";

export type Message = {
  name: string;
  email: string;
  message: string;
};

function App() {
  const [selected, setSelected] = useState<string>("lawrence");
  const [isPopup, setPopup] = useState<boolean>(false);
  const [isATRequest, setATRequest] = useState<boolean>(false);
  const [isContact, setContact] = useState<boolean>(false);
  const [projectSelected, setProjectSelected] = useState<string>("");
  const [message, setMessage] = useState<Message | null>(null);
  const [projectObjectSelected, setProjectObjectSelected] =
    useState<ProjectType | null>(null);
  useEffect(() => {
    if (projectSelected || isATRequest || isContact) {
      setPopup(true);
      const projectObject = projects.find(
        (project) => project.projectId === projectSelected
      );
      if (projectObject) setProjectObjectSelected(projectObject);
    }
    if (!projectSelected && !isATRequest && !isContact) {
      setPopup(false);
      setProjectObjectSelected(null);
    }
  }, [projectSelected, isATRequest, isContact]);
  useEffect(() => {
    if (!isPopup) {
      setProjectSelected("");
      setATRequest(false);
      setContact(false);
    }
  }, [isPopup]);

  useEffect(() => {
    console.log(message);
  }, [message]);

  return (
    <div className="h-screen w-screen flex justify-center items-center relative">
      <div className={`w-full h-full ${isPopup ? "blur-xl" : ""}`}>
        <Layout setSelected={setSelected} selected={selected}>
          {selected === "lawrence" && <Lawrence />}
          {selected === "projects" && (
            <Projects setProjectSelected={setProjectSelected} />
          )}
          {selected === "experience" && <Experience />}
          {selected === "education" && (
            <Education setATRequest={setATRequest} />
          )}
          {selected === "contact" && (
            <Contact setContact={setContact} message={message} />
          )}
        </Layout>
      </div>
      {isPopup && (
        <PopupWindow setPopup={setPopup}>
          {projectObjectSelected && (
            <ProjectCard project={projectObjectSelected} />
          )}
          {isATRequest && <ATRequest />}
          {isContact && (
            <LeaveAMessage setMessage={setMessage} setContact={setContact} />
          )}
        </PopupWindow>
      )}
    </div>
  );
}

export default App;
