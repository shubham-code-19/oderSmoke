import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import DropDownCommon from "../DropDownCommon";

const TopNav = ({ isOpen, onTooggle }) => {
  const [navShow, setNavShow] = useState(false);
  const [country, setCountry] = useState("usa");

  const getDropValueHandler=(elm)=>{
     setCountry(elm)
  }

  return (
    <div className="Topnav  absolute w-full z-[10]">
      <div className="w-[92%] xl:w-[90%] mx-auto   py-5">
        <div className="flex justify-between">
          <div className="Logo hidden md:block">
            <img src="../public/assetss/asset0.svg" alt="" />
          </div>
            <div className="flex items-center">
          <label
            htmlFor="TopNavInput"
            className="serarchParent   bg-Orange lg:bg-white p-[0.9rem] flex items-center gap-3 rounded-full xl:rounded-[50px] xl:px-5 xl:w-[35rem]"
          >
            <div className="SerchIcon text-white   lg:text-Orange ">
              <FaSearch />
            </div>
            <div className="hidden xl:block">
              <input
                id="TopNavInput"
                type="text"
                placeholder="Search For"
                className=" py-1 px-2  border-none focus:outline-none"
              />
            </div>
          </label>
          </div>

          <div className="allbtnParent flex items-center gap-7 lg:gap-3">
            <div className="btn1 flex items-center">
              <div className="icon bg-Orange p-3  lg:h-12 lg:w-10 flex items-center justify-center text-white  rounded-full lg:rounded-[0px] lg:rounded-l-full">
                <FaRegUser />
              </div>
              <div className="hidden lg:flex account bg-white  h-12 w-28  items-center justify-center text-black rounded-r-full">
                <span>My Account</span>
              </div>
            </div>

            <div className="btn2 flex items-center">
              <div className="icon text-xl bg-white p-3 lg:p-0 md:h-14 md:w-10 flex items-center justify-center text-Orange 
              
                   rounded-full md:rounded-[0px]   md:rounded-l-[50px]" >
                <IoCartOutline />
              </div>
              <div className="hidden h-14 w-24 md:flex items-center justify-center bg-white font-semibold">
                <span>$0.00</span>
              </div>
              <div className="hidden icon bg-black h-14 w-10 md:flex items-center justify-center text-white rounded-r-full">
                <span>0</span>
              </div>
            </div>

            <div onClick={onTooggle} className=" btn3 flex items-center relative ">
              <div  className="hidden icon bg-Orange md:bg-white h-10 w-10 md:flex items-center justify-center text-white rounded-l-full">
                <img src="../public/assetss/asset1.png" alt="" />
              </div>
              <div  className=" account rounded-full bg-white  relative h-10 px-3 flex items-center justify-center text-black md:rounded-[0] md:rounded-r-full"
              >
                <span className="font-medium">{country.toUpperCase()}</span>
                <MdKeyboardArrowDown onClick={onTooggle}
                  className={`opacity-50 ${isOpen&& "rotate-180"}`}
                />
              
              <DropDownCommon
                    isOpen={isOpen}
                    onTooggle={onTooggle}
                    Top="TopDropdown"
                    dropData={["usa", "canada", "australia", "germany"]}
                    getDropValueHandler={getDropValueHandler}
                    topNavCountry={country}
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default TopNav;



  {/* <ul
                  className={`bg-white duration-500 overflow-hidden text-black px-5 rounded-xl  flex flex-col gap-4 absolute  top-14 
                ${navShow ? "scale-100 py-3" : "scale-0"}  `}
                > */}
                  {/* {["usa", "canada", "australia", "germany"]} */}





                  {/* .map((elm,index) => {
                    return (
                      
                        <li key={index}
                          onClick={() => {
                            setCountry(elm), setNavShow(false);
                          }}
                          className={`cursor-pointer  hover:bg-gray-100 px-3 rounded-3xl py-1  capitalize ${
                            elm.toLowerCase() == country.toLowerCase() &&
                            "font-bold"
                          }`}
                        >
                          {elm}
                        </li>
                    
                    );
                  })} */}

                 
                {/* </ul> */}