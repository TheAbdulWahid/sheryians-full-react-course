import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
const Header = () => {
  return (
    <header className="header px-[20px] py-[40px]">
      <div className="container">
        <div className="header-content flex justify-between items-center">
          <div className="header-left">
            <HeaderLeft />
          </div>
          <div className="header-right">
            <HeaderRight />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
