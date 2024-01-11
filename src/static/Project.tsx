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
    projectId: "web3",
    name: "Web3 Blackjack Casino Game",
    gitHubUrl: "https://github.com/lawrenxe/Blackjack",
    skills: ["React.js", "CSS", "JavaScript", "Web3 - Solidity"],
    imgUrls: [require("../assets/web3.png")],
    youtubeUrl: "https://www.youtube.com/embed/lr_89dHGKEU?si=WfVinmOCsk8cSsoY",
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
];

export default projects;
