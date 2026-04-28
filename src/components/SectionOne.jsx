import SectionOneLeft from "./SectionOneLeft";
import SectionOneRight from "./SectionOneRight";
const Section1 = (props) => {
  return (
    <>
      <div className="section-one overflow-hidden py-[50px] px-[20px]">
        <div className="container">
          <div className="section-one-content flex justify-between gap-[40px]">
            <SectionOneLeft />
            <SectionOneRight userData={props.userData}/>
          </div>
        </div>
      </div>
    </>
  );
};
export default Section1;
