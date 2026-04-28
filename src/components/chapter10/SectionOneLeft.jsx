import SectionOneLeftText from "./SectionOneLeftText";
import SectionOneArrow from "./SectionOneArrow";
const SectionOneLeft = () => {
  return (
    <>
      <div className="section-one-left flex flex-col justify-between w-[30%]">
        <SectionOneLeftText />
        <SectionOneArrow />
      </div>
    </>
  );
};
export default SectionOneLeft;
