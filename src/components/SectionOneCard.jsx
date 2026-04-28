import {RiArrowRightLine} from '@remixicon/react'
const SectionOneCard = (props,index) => {
  return (
    <>
      <div className="card rounded-[30px] overflow-hidden w-[300px] relative h-[550px] p-[30px] flex flex-col justify-between shrink-0 before:w-full before:h-full before:bg-[#0000009a] before:absolute before:-z-1 before:left-0 before:top-0">
        <div className="card-number flex-1">
          <span className="w-[40px] h-[40px] flex justify-center items-center font-[500] bg-white rounded-full ">{props.idx}</span>
        </div>
        <div className="userImage absolute h-full top-0 left-0 -z-2 ">
          <img
            className=" w-full object-cover h-full"
            src={props.profilePic}
            alt="User Image"
          />
        </div>
        <div className="intro relative mb-[60px] text-[22px] text-white">
          <p>
            {props.userIntro}
          </p>
        </div>
        <div style={{backgroundColor:props.tagColor}} className="tag px-[20px] py-[10px] text-white flex rounded-[30px] justify-between">
          <a href="#">{props.userTag}</a>
          <RiArrowRightLine />
        </div>
      </div>
    </>
  );
};
export default SectionOneCard;
