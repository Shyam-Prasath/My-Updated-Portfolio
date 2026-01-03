import { getImagePath } from "@/lib/utils";
import { Mydata } from "@/types/mydata";
import Image from "next/image";

const givenData: Mydata[] = [
  {
    id: 1,
    icon: (
      <Image
        src={getImagePath("/images/main/Graduation.svg")}
        alt="about-main"
        width={500}
        height={500}
        className="object-contain"
      />
    ),
    title: "B.Tech — Computer Science & Engineering",
    paragraph:
      "SRM Institute of Science and Technology (Ramapuram). Graduating in 2026 with a CGPA of 9.5/10, building a strong foundation in software engineering, data structures, AI, and full-stack development.",
  },
  {
    id: 2,
    icon: (
      <Image
        src={getImagePath("/images/main/12.svg")}
        alt="about-main"
        width={260}
        height={50}
        className="object-contain"
      />
    ),
    title: "Class XII — CBSE (MPC)",
    paragraph:
      "Aditya Vidyashram, Poraiyur, Puducherry. Completed CBSE Class XII in 2022 with 84%, specializing in Mathematics, Physics, and Chemistry.",
  },
  {
    id: 3,
    icon: (
      <Image
        src={getImagePath("/images/main/10.svg")}
        alt="about-main"
        width={180}
        height={10}
        className="object-contain"
      />
    ),
    title: "Class X — CBSE",
    paragraph:
      "Velammal Vidyalaya, Madurai. Completed Class X in 2020 with 79.4%, building a strong academic foundation in core subjects.",
  },
  {
    id: 4,
    icon: (
      <Image
        src={getImagePath("/images/main/Machine.svg")}
        alt="about-main"
        width={200}
        height={500}
        className="object-contain"
      />
    ),
    title: "Machine Learning Internship",
    paragraph:
      "Rinex Technologies Pvt Ltd (Jul 2023 – Sep 2023). Worked on data analysis using NumPy and Pandas, machine learning with TensorFlow, OpenCV-based image processing, and built interactive Streamlit applications.",
  },
  {
    id: 5,
    icon: (
      <Image
        src={getImagePath("/images/main/Web.svg")}
        alt="about-main"
        width={200}
        height={500}
        className="object-contain"
      />
    ),
    title: "Web Development Internship",
    paragraph:
      "OASIS Infobyte (May 2024 – Jul 2024). Specialized in HTML, CSS, JavaScript, and MERN stack. Built responsive login pages and developed a Job Search Portal with role-based authentication.",
  },
  {
    id: 6,
    icon: (
      <Image
        src={getImagePath("/images/main/Basic.svg")}
        alt="about-main"
        width={200}
        height={500}
        className="object-contain"
      />
    ),
    title: "Hands-on Technical Skillset",
    paragraph:
      "Experienced with Python, JavaScript, MERN stack, Machine Learning, OpenCV, Streamlit, REST APIs, and building scalable, responsive web applications.",
  },
];

export default givenData;
