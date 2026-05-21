import React, { useContext } from "react";
import { ContextData } from "../../context/ThemeContent";

const Navbar = () => {
    const [theme, setTheme] = useContext(ContextData);
    return (
    <>
      <header className={`${theme} header`}>
        <h1 className="logo text-[50px] !font-black !text-[black]">
          Sheryians Coding School
        </h1>
        <nav>
          <ul className="flex items-center gap-[20px] text-[18px] !font-bold !text-[black]">
            <li className="!text-[black]">Home</li>
            <li className="!text-[black]">About</li>
            <li className="!text-[black]">Services</li>
            <li className="!text-[black]">Contact</li>
            <li className="!text-[black]">Current Theme: {theme}</li>
            <div className="current-theme bg-black px-[25px] py-[10px] cursor-pointer rounded" onClick={()=>{
                setTheme('dark')
            }}>Change Theme</div>
          </ul>
          
        </nav>
      </header>
    </>
  );
};

export default Navbar;
