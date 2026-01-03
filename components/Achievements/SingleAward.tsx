import { Awards } from "@/types/awards";
import Image from "next/image";

const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleAward = ({ award }: { award: Awards }) => {
  const {
    star,
    title,
    organizer,
    category,
    project,
    description,
    date,
    image,
    image1
  } = award;

  const ratingIcons = Array.from({ length: star }).map((_, index) => (
    <span key={index} className="text-yellow">
      {starIcon}
    </span>
  ));

  return (
    <div className="w-full h-full">
      <div
        className="
          wow fadeInUp
          h-full
          flex flex-col
          shadow-two dark:shadow-three dark:hover:shadow-gray-dark
          rounded-sm bg-white p-8 duration-300 hover:shadow-one dark:bg-dark
          lg:px-5 xl:px-8 cursor-pointer
        "
        data-wow-delay=".1s"
      >

        {image && (
          <div className="relative h-[180px] w-full overflow-hidden rounded-t-sm">
            <Image
              src={image}
              alt={title}
              fill
              className="object rounded-xl"
              priority={false}
            />
          </div>
        )}
        <br></br>

        <div className="mb-4 flex items-center space-x-1">
          {ratingIcons}
        </div>


        <h3 className="mb-2 text-xl font-bold text-dark dark:text-white">
          {title}
        </h3>


        <p className="mb-4 text-sm font-medium text-primary">
          {category} • {date}
        </p>


        <p
          className="
            flex-grow
            mb-6 border-b border-body-color border-opacity-10 pb-6
            text-base leading-relaxed text-body-color
            dark:border-white dark:border-opacity-10 dark:text-white
            text-justify
          "
        >
          {description}
        </p>


        <div className="flex items-center mt-auto">
          {image && (
            <div className="relative mr-4 h-[50px] w-[50px] overflow-hidden rounded-full">
              <Image src={image1} alt={title} fill className="object-full"/>
            </div>
          )}

          <div className="w-full">
            <h4 className="text-base font-semibold text-dark dark:text-white">
              {organizer}
            </h4>

            {project && (
              <p className="text-sm text-body-color">
                Project: {project}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAward;
