import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Achievements from "@/components/Achievements";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import JobData from "@/components/JobData";
import Skill from "@/components/Skills";
import Skillset from "@/components/SkillSet";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "S Shyam Prasath Portfolio",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <JobData />
      <Skillset />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Achievements />
      <Skill />
      <Contact />
    </>
  );
}
