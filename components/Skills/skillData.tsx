import { getImagePath } from "@/lib/utils";
import { Skill } from "@/types/skills";

const skillData = (): Skill[] => [
  {
    id: 1,
    title: "Frontend Engineering",
    paragraph:
      "Building responsive, accessible, and high-performance user interfaces with modern frontend technologies.",
    image: getImagePath("/images/skills/Frontend.svg"),
    tags: ["frontend"],
    publishDate: "React • Next.js • TypeScript • Tailwind • Framer Motion",
  },
  {
    id: 2,
    title: "Backend & Real-Time Systems",
    paragraph:
      "Designing scalable backend systems, REST APIs, and real-time communication services.",
    image: getImagePath("/images/skills/Backend.svg"),
    tags: ["backend"],
    publishDate: "Node.js • Express • REST APIs • Socket.io • WebRTC",
  },
  {
    id: 3,
    title: "Blockchain & Web3 Development",
    paragraph:
      "Developing decentralized applications with secure smart contracts and distributed storage.",
    image: getImagePath("/images/skills/Blockchain.svg"),
    tags: ["web3"],
    publishDate: "Solidity • Smart Contracts • IPFS • Web3Auth • dApps",
  },
  {
    id: 4,
    title: "AI & Machine Learning Integration",
    paragraph:
      "Integrating AI capabilities into applications using modern LLMs and data pipelines.",
    image: getImagePath("/images/skills/ml.svg"),
    tags: ["ai"],
    publishDate: "Google Gemini • ML Pipelines • LLM Integration • Data Processing",
  },
  {
    id: 5,
    title: "Programming Languages & Tools",
    paragraph:
      "Strong foundation in core programming languages, databases, and development tools.",
    image: getImagePath("/images/skills/Tools.svg"),
    tags: ["tools"],
    publishDate:
      "HTML5 • CSS • JavaScript • Python • MongoDB • Git • GitHub • VS Code • Postman",
  },
];

export default skillData;
