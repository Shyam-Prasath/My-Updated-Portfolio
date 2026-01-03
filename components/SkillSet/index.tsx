import { Skill } from "@/types/skill";
import Image from "next/image";
import SkillSetData from "./SkillSetData";

const CLOUD_POSITIONS = [
  { x: "50%", y: "50%", scale: 1.3 },

  { x: "35%", y: "35%", scale: 1.1 },
  { x: "65%", y: "35%", scale: 1.1 },
  { x: "35%", y: "65%", scale: 1.1 },
  { x: "65%", y: "65%", scale: 1.1 },

  { x: "20%", y: "50%", scale: 1.0 },
  { x: "80%", y: "50%", scale: 1.0 },
  { x: "50%", y: "20%", scale: 1.0 },
  { x: "50%", y: "80%", scale: 1.0 },

  { x: "25%", y: "25%", scale: 0.9 },
  { x: "75%", y: "25%", scale: 0.9 },
  { x: "25%", y: "75%", scale: 0.9 },
  { x: "75%", y: "75%", scale: 0.9 },

  { x: "10%", y: "50%", scale: 0.85 },
  { x: "90%", y: "50%", scale: 0.85 },
  { x: "50%", y: "10%", scale: 0.85 },
  { x: "50%", y: "90%", scale: 0.85 },
];

const Skillset = () => {
  const SkillData = SkillSetData();

  return (
    <section className="pt-16">
      <div className="container">
        <div className="w-full">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white text-center p-10">
            Skills I Know
          </h1>

          {/* CLOUD CONTAINER */}
          <div
            className="
              relative
              mx-auto
              h-[520px]
              max-w-[900px]

              rounded-2xl
              bg-gray-light
              dark:bg-gray-dark
            "
          >
            {SkillData.map((skill, index) => {
              const pos = CLOUD_POSITIONS[index];

              return (
                <SingleSkillSet
                  key={skill.id}
                  Skill={skill}
                  x={pos.x}
                  y={pos.y}
                  scale={pos.scale}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skillset;

const SingleSkillSet = ({
  Skill,
  x,
  y,
  scale,
}: {
  Skill: Skill;
  x: string;
  y: string;
  scale: number;
}) => {
  const { href, image, name } = Skill;

  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow noreferrer"
      title={name}
      className="
        absolute
        left-1/2
        top-1/2

        -translate-x-1/2
        -translate-y-1/2

        transition-all duration-300
        hover:scale-125
        hover:grayscale
      "
      style={{
        left: x,
        top: y,
        transform: `translate(-50%, -50%) scale(${scale})`,
      }}
    >
      <div
        className="
          relative
          h-[110px]
          w-[110px]
          rounded-full
          overflow-hidden
        "
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain p-3"
        />
      </div>
    </a>
  );
};
