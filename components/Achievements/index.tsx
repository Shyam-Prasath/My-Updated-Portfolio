import { Awards } from "@/types/awards";
import SectionTitle from "../Common/SectionTitle";
import SingleAward from "./SingleAward";

const getAwardData = (): Awards[] => [
  {
    id: 1,
    title: "Founder Forum – Startup Pitching (1st Prize)",
    organizer:
      "SRM Institute of Science and Technology, Ramapuram · Department of EEE",
    category: "Startup Pitching Competition",
    project: "IoT-Based Food Spoilage Detection and Alert System",
    description:
      "Proposed an innovative IoT solution to detect and prevent food spoilage using temperature, humidity, and gas sensors integrated with real-time mobile alerts. Designed a working prototype suitable for local bakeries and small shops to reduce food waste and improve food safety through smart monitoring",
    date: "Aug 2024",
    image:"/images/achievements/ff.png",
    image1:"/images/achievements/srm.png",
    star: 1,
  },
  {
    id: 2,
    title: "Tech Quiz & Web Development Challenge",
    organizer: "Texus · SRM Institute of Science and Technology",
    category: "Technical Quiz & Web Development",
    project: "Tourism Website Project",
    description:
      "Took part in a two-stage competition, successfully qualifying through an initial technical quiz and progressing to the final round, where our four-member team built a fully functional tourism website highlighting major destinations, attractions, and travel details",
    date: "Apr 2024",
    image:"/images/achievements/texus.png",
    image1:"/images/achievements/srm.png",
    star: 2,
  },
  {
    id: 3,
    title: "Cybertriathlon",
    organizer: "SRMIST Ramapuram",
    category: "Cybersecurity Competition",
    project: "Cyber Awareness & Security Scenarios",
    description:
      "Progressed throughout many multiple competitive stages, starting with a cybersecurity assessment, moving on to scenario-based problem analysis, and culminating in an intensive interview that evaluated real-time problem-solving, cyber awareness, and communication abilities",
    date: "Apr 2023",
    image:"/images/achievements/cyber.png",
    image1:"/images/achievements/srm.png",
    star: 3,
  },
  {
    id: 4,
    title: "Seminar & Shark Tank – Cyber Carnival’24",
    organizer: "SRMIST Ramapuram",
    category: "Idea Pitching & Seminar",
    project: "Decentralized Social Media Platform",
    description:
      "Presented an idea for a decentralized social networking platform focused on user privacy, secure communication, and decentralized identity. Proposed features which included end-to-end encrypted messaging , also blockchain-based identity verification with zero-knowledge proofs, NFT-backed content ownership, and community moderation.",
    date: "Feb 2024",
    image:"/images/achievements/seminar.png",
    image1:"/images/achievements/srm.png",
    star: 4,
  },
  {
    id: 5,
    title: "Mavericks Gen AI Hackathon",
    organizer:
      "Panimalar Engineering College · Mavericks Designathon – Hexaware Associates",
    category: "AI Hackathon",
    project: "TechStrike – AI-Powered Pool Management System",
    description:
      "Actively participated in a team-based hackathon developing TechStrike, a web and mobile platform with Admin and Consultant dashboards. Integrated AI models to analyze resumes, attendance, training engagement, and job matching, showcasing strong AI integration and full-stack problem solving.",
    date: "Aug 2025",
    image:"/images/achievements/hexaware.png",
    image1:"/images/achievements/panimalar.png",
    star: 5,
  },
  {
    id: 6,
    title: "NatWest Hack4aCause 2025",
    organizer: "NatWest Group & Snowflake (LearnAIx Partner)",
    category: "Blockchain Hackathon",
    project: "TraceBloom – Transparent Agricultural Supply Chain",
    description:
      "Contributed to the development of TraceBloom , which is a blockchain-based platform for a transparented agricultural supply chains. Focused on smart contract–driven payments, batch traceability, and role-based dashboards for the farmers, the distributors, and the consumers, delivering a complete end-to-end prototype within the hackathon timeline.",
    date: "Oct 2025",
    image:"/images/achievements/hack.png",
    image1:"/images/achievements/snow.png",
    star: 6,
  },
];

const Awarded = () => {
  return (
    <section className="relative z-10 bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Awards & Competitions"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {getAwardData().map((award) => (
            <SingleAward key={award.id} award={award} />
          ))}
        </div>
      </div>
      <div className="absolute right-0 top-5 z-[-1]">
        <svg
          width="238"
          height="531"
          viewBox="0 0 238 531"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="422.819"
            y="-70.8145"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 422.819 -70.8145)"
            fill="url(#paint0_linear_83:2)"
          />
          <rect
            opacity="0.3"
            x="426.568"
            y="144.886"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 426.568 144.886)"
            fill="url(#paint1_linear_83:2)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_83:2"
              x1="517.152"
              y1="-251.373"
              x2="517.152"
              y2="459.865"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_83:2"
              x1="455.327"
              y1="-35.673"
              x2="455.327"
              y2="675.565"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-5 left-0 z-[-1]">
        <svg
          width="279"
          height="106"
          viewBox="0 0 279 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <path
              d="M-57 12L50.0728 74.8548C55.5501 79.0219 70.8513 85.7589 88.2373 79.3692C109.97 71.3821 116.861 60.9642 156.615 63.7423C178.778 65.291 195.31 69.2985 205.911 62.3533C216.513 55.408 224.994 47.7682 243.016 49.1572C255.835 50.1453 265.278 50.8936 278 45.3373"
              stroke="url(#paint0_linear_72:302)"
            />
            <path
              d="M-57 1L50.0728 63.8548C55.5501 68.0219 70.8513 74.7589 88.2373 68.3692C109.97 60.3821 116.861 49.9642 156.615 52.7423C178.778 54.291 195.31 58.2985 205.911 51.3533C216.513 44.408 224.994 36.7682 243.016 38.1572C255.835 39.1453 265.278 39.8936 278 34.3373"
              stroke="url(#paint1_linear_72:302)"
            />
            <path
              d="M-57 23L50.0728 85.8548C55.5501 90.0219 70.8513 96.7589 88.2373 90.3692C109.97 82.3821 116.861 71.9642 156.615 74.7423C178.778 76.291 195.31 80.2985 205.911 73.3533C216.513 66.408 224.994 58.7682 243.016 60.1572C255.835 61.1453 265.278 61.8936 278 56.3373"
              stroke="url(#paint2_linear_72:302)"
            />
            <path
              d="M-57 35L50.0728 97.8548C55.5501 102.022 70.8513 108.759 88.2373 102.369C109.97 94.3821 116.861 83.9642 156.615 86.7423C178.778 88.291 195.31 92.2985 205.911 85.3533C216.513 78.408 224.994 70.7682 243.016 72.1572C255.835 73.1453 265.278 73.8936 278 68.3373"
              stroke="url(#paint3_linear_72:302)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_72:302"
              x1="256.267"
              y1="53.6717"
              x2="-40.8688"
              y2="8.15715"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_72:302"
              x1="256.267"
              y1="42.6717"
              x2="-40.8688"
              y2="-2.84285"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_72:302"
              x1="256.267"
              y1="64.6717"
              x2="-40.8688"
              y2="19.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_72:302"
              x1="256.267"
              y1="76.6717"
              x2="-40.8688"
              y2="31.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Awarded;
