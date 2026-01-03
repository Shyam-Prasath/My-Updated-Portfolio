import SectionTitle from "../Common/SectionTitle";
import DataContent from "./DataContent";
import givenData from "./givenData";

const JobData = () => {
  return (
    <>
      <section id="DataContent" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="My Educational Background & Internship"
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {givenData.map((given) => (
              <DataContent key={given.id} given={given} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default JobData;
