import SectionTitle from "../Common/SectionTitle";
import SingleSkill from "./SingleSkill";
import skillData from "./skillData";

const Skill = () => {
  return (
    <section
      id="skills"
      className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="My Latest Skills"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {skillData().map((skill) => (
            <div key={skill.id} className="w-full">
              <SingleSkill skill={skill} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
