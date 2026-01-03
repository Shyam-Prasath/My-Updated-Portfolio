import { Skill } from "@/types/skills";
import Image from "next/image";
import Link from "next/link";

const SingleSkill = ({ skill }: { skill: Skill }) => {
  const { title, image, paragraph, tags, publishDate } = skill;

  return (
    <div
      className="
        wow fadeInUp group relative h-full overflow-hidden rounded-xl
        bg-white shadow-one duration-300 hover:shadow-two
        dark:bg-dark dark:hover:shadow-gray-dark
      "
      data-wow-delay=".1s"
    >
      <Link href="/skills" className="relative block h-[220px] w-full">
        <span className="absolute right-6 top-6 z-20 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
          {tags[0]}
        </span>
        <Image src={image} alt={title} fill className="object" />
      </Link>

      <div className="flex flex-col p-6 h-[calc(100%-220px)]">
        <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
          {title}
        </h3>

        <p className="flex-grow border-b pb-6 text-body-color">
          {paragraph}
        </p>

        <div className="pt-4">
          <h4 className="text-sm font-medium text-dark dark:text-white">
            Technologies
          </h4>
          <p className="text-xs text-body-color">{publishDate}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleSkill;
