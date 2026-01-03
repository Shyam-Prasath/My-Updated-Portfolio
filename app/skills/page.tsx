import Breadcrumb from "@/components/Common/Breadcrumb";
import SingleSkill from "@/components/Skills/SingleSkill";
import skillData from "@/components/Skills/skillData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | Shyam Prasath",
};

const SkillsPage = () => {
  return (
    <>
      <Breadcrumb pageName="Technical Skills" />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center gap-y-8 ">
            {skillData().map((skill) => (
              <div
                key={skill.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleSkill skill={skill} />
              </div>
            ))}
          </div>

          <div
            className="wow fadeInUp -mx-4 flex flex-wrap"
            data-wow-delay=".15s"
          >
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                <li className="mx-1">
                  <a className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color">
                    Prev
                  </a>
                </li>
                <li className="mx-1">
                  <a className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-primary px-4 text-sm text-white">
                    1
                  </a>
                </li>
                <li className="mx-1">
                  <a className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color">
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsPage;
