import { ReactNode } from "react";

export type ProjectType = {
  projectId: string;
  name: string;
  gitHubUrl?: string;
  url?: string;
  skills: string[];
  titleImgUrl?: string;
  imgUrls: string[];
  youtubeUrl?: string;
  description: ReactNode;
};

const projects: ProjectType[] = [
  {
    projectId: "youtube",
    name: "YouTube History Report",
    gitHubUrl: "https://github.com/lawrenxe/youtube-front/",
    url: "https://youtube-history-report-c80c692ddefb.herokuapp.com/",
    skills: [
      "React.js",
      "CSS",
      "Tailwind",
      "TypeScript",
      "JavaScript",
      "Flask",
      "Docker",
    ],
    imgUrls: [
      require("../assets/YouTube1.PNG"),
      require("../assets/YouTube2.PNG"),
      require("../assets/YouTube3.PNG"),
      require("../assets/YouTube4.PNG"),
    ],
    description: (
      <div className="font-normal text-lg flex flex-col gap-4">
        <p>
          <span className="font-medium">YouTube History Report</span> is a
          responsive web application that reads the YouTube watch history from
          Google Takeout and generates a tailored Annual Report for the user.
        </p>
        <p>
          Users can get their YouTube data from Google Takeout with a detailed
          step-by-step guide.
        </p>
        <p>
          After uploading their data without worrying that their data will be
          used for any other reasons, the app will generate a 2023 YouTube
          History Report in a vivid and friendly User Interface, including:
        </p>
        <div>
          <p className="ml-6">The Number of videos that they watched</p>
          <p className="ml-6">The Most Watched Video</p>
          <p className="ml-6">The Top Videos The Favourite Channel</p>
          <p className="ml-6">
            The Top Channels Breakdown by Month Breakdown by hours and time
            period.
          </p>
        </div>
        <p className="font-bold">
          This app has generated more than 2000 reports for users and has
          received more than 30 stars by peer developers as of Jan 2024.
        </p>
      </div>
    ),
  },
  {
    projectId: "music",
    name: "Music Psychology Multi-media Web Application",
    skills: ["React.js", "CSS", "JavaScript"],
    titleImgUrl: require("../assets/music1.png"),
    imgUrls: [require("../assets/music1.gif")],
    description: (
      <div className="font-normal text-lg flex flex-col gap-4">
        <p>
          <span className="font-medium">
            Music Psychology Multi-media Web Application
          </span>{" "}
          is a study system that was sponsored by the University of Melbourne to
          launch with correspondence to the Publication of a textbook.
        </p>
        <p>
          The web app is built by pure React.js and with variety of
          functionalities, including viewing media corresponding to each book
          chapter, self-checking with marked quiz, and reaching out to the team
          when problems occurs.
        </p>
        <p>It is scheduled to be launched by the end of 2024.</p>
      </div>
    ),
  },
  {
    projectId: "web3",
    name: "Web3 Blackjack Casino Game",
    gitHubUrl: "https://github.com/lawrenxe/Blackjack",
    skills: ["React.js", "CSS", "JavaScript", "Web3 - Solidity"],
    imgUrls: [require("../assets/web3.png")],
    youtubeUrl: "https://www.youtube.com/embed/lr_89dHGKEU?si=WfVinmOCsk8cSsoY",
    description: (
      <div className="font-normal text-lg flex flex-col gap-4">
        <p>
          <span className="font-medium">Web3 Blackjack Casino Game</span> is a
          web application that integrate the traditional BlackJack game with
          Ethereum Smart Contract.
        </p>
        <p>
          Users can join the game with Ethers in the Rinkeby network, which is a
          test network with only pseudo-Ethereum for test uses. So no legal
          issues exist.
        </p>
        <p>
          The game was designed and implemented in basic Front-Back structure.
          The main game logic was implemented in Solidity, which is a
          Ethereum-specific smart contract language to ensure the fairness.
          Great amount of effort was spent to trade-off between security and the
          effectiveness of card-deck shuffling.
        </p>
        <div>
          The Front-end was implemented with React.js and connected to the smart
          contract via a middleware named Truffle.
        </div>
        <p>
          This app was a student project during my Master's study, and got a
          High Distinction result.
        </p>
      </div>
    ),
  },
  {
    projectId: "standup",
    name: "Daily StandUp Board",
    skills: [
      "React.js",
      "TypeScript",
      "NestJS",
      "GraphQL",
      "REST API",
      "PostgreSQL",
    ],
    imgUrls: [
      require("../assets/standup1.PNG"),
      require("../assets/standup2.PNG"),
    ],
    description: (
      <div className="font-normal text-lg flex flex-col gap-4">
        <p>
          <span className="font-medium">Daily StandUp Board</span> is a web
          application designed and implemented for internal use in one of my
          previous internships.
        </p>
        <p>
          The app reads updates from a Slack channel that was used by colleagues
          to update their works, stored in the PostgreSQL database and passed to
          the front end in GraphQL interface and displayed elegantly in the
          front-end written in React.js.
        </p>
        <p>
          The app was used by the company that I interned during daily stand-up
          meeting replacing the whiteboard used previously.
        </p>
      </div>
    ),
  },
  {
    projectId: "covid",
    name: "COVID-related Tweets Rumour Analysis",
    skills: ["NLP", "ML", "Python", "Pandas", "Data Analysis"],
    imgUrls: [require("../assets/covid1.png")],
    description: (
      <div className="font-normal text-lg flex flex-col gap-4">
        <p>
          <span className="font-medium">
            COVID-related Tweets Rumour Analysis
          </span>{" "}
          was one of my favourite Machine Learning student projects that tells
          if a tweet that was posted is rumour.
        </p>
        <p>
          I was involved in designing and developing a BERT-pretrained model
          with delicate FNN fine-tuning process.
        </p>
        <p>
          The model was trained with 7,234 COVID-related tweets, and achieved
          the F1 score of 0.97 on validation set and 0.94 on the test set.
        </p>
      </div>
    ),
  },
];

export default projects;
