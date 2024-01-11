import React from "react";
import EducationItem from "./EducationItem";
import unimelb from "../assets/unimelb.png";

const Education = () => {
  return (
    <div className="flex flex-col">
      <EducationItem
        school={"University of Melbourne"}
        period={"Mar. 2021 - Mar. 2023"}
        course={"Master of Information Technology"}
        gpa={"81.2 (High Distinction)"}
        achieve="Awarded 2022 Melbourne Graduate Scholarship(1st Class) for academic performance."
        subjects={
          "Object Oriented Programming in Java · Design Patterns · Database System(SQL/NoSQL) · Full-Stack Web Development (Node.js, React.js) · Distributed System · Software Project Management(Agile) · Machine Learning · Algorithms · Natural Language Processing · Computer Vision..."
        }
      />
      <EducationItem
        school={"University of Melbourne"}
        period={"Mar. 2017 - Dec. 2019"}
        course={"Bachelor of Commerce"}
        gpa={"76.958 (Second Class Honours, Division A)"}
        subjects={
          "Foundation of FinTech · Python · Financial Accounting · Investment..."
        }
      />
      <img
        className="-mt-36 w-60 opacity-30 self-end"
        src={unimelb}
        alt="Unimelb Logo"
      />
    </div>
  );
};

export default Education;
