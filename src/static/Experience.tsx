import { ReactNode } from "react";

export type ExperienceType = {
  workplace: string;
  location: string;
  period: string;
  title: string;
  workItems: string[];
  skills: string[];
};

const experiences: ExperienceType[] = [
  {
    workplace: "University of Melbourne",
    location: "Melbourne, VIC",
    period: "Jul. 2023 - Dec. 2023",
    title: "Research Assistant - Web Development",
    workItems: [
      "Collaborated with stakeholders to capture the requirements for a multimedia website associated with a Music Psychology book publication.",
      "Conceived, designed, developed the website with React.js, REST API, node.js, and MySQL.",
    ],
    skills: [
      "React.js",
      "MySQL",
      "Node.js",
      "REST API",
      "Communication",
      "Task Prioritisation",
    ],
  },
  {
    workplace: "Beyond Zero Technologies",
    location: "Melbourne, VIC",
    period: "Aug. 2023 - Nov. 2023",
    title: "Software Engineer - Front-End Web Development",
    workItems: [
      "Contributed to the front-end development and continuous bug-fixing of a Building Management System, improving user experience and functionality.",
      "Involved in the design and developing phase of a Service Booking Module in the existing Management System.",
    ],
    skills: [
      "React.js",
      "TypeScript",
      "GraphQL",
      "CSS",
      "PostgreSQL",
      "Agile",
      "Teamwork",
      "Communication",
    ],
  },
  {
    workplace: "Queue Solutions",
    location: "Melbourne, VIC",
    period: "Nov. 2022 - Mar. 2023",
    title: "Sofware Engineer - Full Stack Web Development",
    workItems: [
      "Improved the current Motivational Modelling Editor by conducting code quality control, merging multiple branches developed by previous students, integrating multiple features with a reliable codebase.",
      "Migrate the database from MySQL to PostgreSQL by rewriting APIs.",
    ],
    skills: [
      "JavaScript",
      "jQuery",
      "CSS",
      "HTML",
      "PostgreSQL",
      "REST API",
      "Node.js",
      "Agile",
      "leadership",
    ],
  },
  {
    workplace: "Deloitte",
    location: "Shanghai, CHINA",
    period: "Dec. 2020 - Mar. 2021",
    title: "Consulting Analyst Intern",
    workItems: [
      "Collaborated with Junior Consultants to perform due diligence audits on two IPO companies.",
      "Ensuring compliance and assessing business processes through staff and management interviews.",
    ],
    skills: [
      "Customer Service",
      "Legal Compliance",
      "Microsoft Office",
      "Python",
    ],
  },
];

export default experiences;
