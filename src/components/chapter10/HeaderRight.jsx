import {RiCornerDownRightLine} from '@remixicon/react'
const HeaderRight = () => {
  return (
    <>
      <a href='#' className="cta flex gap-[10px] tracking-[2px] text-[14px]">
        <RiCornerDownRightLine />
        <span className='uppercase'>Digital Banking Platform</span>
      </a>
    </>
  );
};
export default HeaderRight;
