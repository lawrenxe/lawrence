export type EducationType = {
  educationId: string;
  school: string;
  period: string;
  course: string;
  gpa: string;
  achieve?: string;
  subjects: string;
};

const educations: EducationType[] = [
  {
    educationId: "master",
    school: "University of Melbourne",
    period: "Mar. 2021 - Mar. 2023",
    course: "Master of Information Technology",
    gpa: "High Distinction",
    achieve:
      "Awarded 2022 Melbourne Graduate Scholarship(1st Class) for academic performance.",
    subjects:
      "Object Oriented Programming in Java · Design Patterns · Database System(SQL/NoSQL) · Full-Stack Web Development (Node.js, React.js) · Distributed System · Software Project Management(Agile) · Machine Learning · Algorithms · Natural Language Processing · Computer Vision...",
  },
  {
    educationId: "bachelor",
    school: "University of Melbourne",
    period: "Mar. 2017 - Dec. 2019",
    course: "Bachelor of Commerce",
    gpa: "Second Class Honours, Division A",
    subjects:
      "Foundation of FinTech · Python · Financial Accounting · Investment...",
  },
];

export default educations;
