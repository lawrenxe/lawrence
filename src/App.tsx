import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./Components/Layout";
import Lawrence from "./Components/Lawrence";
import Education from "./Components/Education";
import { log } from "console";
import Contact from "./Components/Contact";

function App() {
  const [selected, setSelected] = useState<string>("lawrence");
  useEffect(() => {
    console.log(selected);
  }, [selected]);

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Layout setSelected={setSelected} selected={selected}>
        {selected === "lawrence" && <Lawrence />}
        {selected === "education" && <Education />}
        {selected === "contact" && <Contact />}
      </Layout>
    </div>
  );
}

export default App;
