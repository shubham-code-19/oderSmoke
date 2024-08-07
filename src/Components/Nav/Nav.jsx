import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import NavDropDown from "./NavDropDown";
import { BiMenuAltLeft } from "react-icons/bi";
import { GiCrossedAxes } from "react-icons/gi";
import DropDownCommon from "../DropDownCommon";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Nav = ({ isOpen, onTooggle }) => {
  const [responsiveNav, setResponsiveNav] = useState(false);

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsFixed(true);
      } else if (window.scrollY < 300) {
        setIsFixed(false);
      } else {
        false;
      }
    };
    window.addEventListener("scroll", handleScroll);

  }, []);


  const dropData=["Select Store","Store One" ,"Store Two","Store three" ]
  const [dropValue,setDropValue]=useState("Select Store")
  const getDropValueHandler=(elm)=>{
    setDropValue(elm)
  }

  const navigate = useNavigate();

  return (
    <div
      className={`Navbar duration-100 bg-black ${
        isFixed ? " top-0" : "top-28 md:top-[100px]"
      } fixed  w-full z-[8] `}
    >
      <div className="w-[92%] xl:w-[85%]   mx-auto md:py-3 text-white">
        {!responsiveNav ? (
          <BiMenuAltLeft
            className="lg:hidden text-5xl"
            onClick={() => {
              setResponsiveNav(!responsiveNav);
            }}
          />
        ) : (
          <GiCrossedAxes
            className="lg:hidden text-5xl"
            onClick={() => {
              setResponsiveNav(!responsiveNav);
            }}
          />
        )}

        <div
          className={` ${
            responsiveNav ? "max-lg:h-screen" : "max-lg:h-0"
          }  overflow-hidden  lg:overflow-visible duration-500 flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-0`}
        >
          <div className=" left-Side-Section py-3 lg:py-0 flex flex-col lg:flex-row justify-between lg:items-center">
            <ul className=" navList  capitalize py-3 lg:py-0 flex flex-col lg:flex-row gap-10 lg:gap-4 xl:gap-10 lg:items-center font-bold text-xl lg:text-base lg:font-medium ">
              <li className="group flex items-center gap-[0.1rem] relative">
                <NavLink to="/" onClick={()=>setResponsiveNav(false)}>Home</NavLink>
                <MdKeyboardArrowDown />
                <NavDropDown
                  info={[
                    "Home one",
                    "Home one light",
                    "Home Two",
                    "Home Two light",
                  ]}
                />
              </li>
              <li>
                <NavLink to="about" onClick={()=>setResponsiveNav(false)}>about us</NavLink>
              </li>
              <li className="group flex items-center gap-[0.1rem] relative">
                pages
                <MdKeyboardArrowDown />
                <NavDropDown
                  info={[
                    "Shop Left Bar",
                    "Shop Right Bar",
                    "Shop Single",
                    "Cart Pages",
                    "Check Out Pages",
                    "Register",
                    "Login",
                    "404 Error",
                  ]}
                />
              </li>
              <li className="group flex items-center gap-[0.1rem] relative">
                blog <MdKeyboardArrowDown />
                <NavDropDown
                  info={[
                    "Blog Stander",
                    "Blog Grid",
                    "Blog List",
                    "Blog Single",
                  ]}
                />
              </li>
              <li>
              <NavLink to="contact" onClick={()=>setResponsiveNav(false)}>   contact us</NavLink>
            </li>
            </ul>
          </div>

          <div className="rightSideSection hidden md:flex flex-col  md:flex-row md:gap-10 ">
            <div className="box1 flex gap-3 items-center">
              <div>
                <img
                  src="./assetss/asset2.png"
                  alt=""
                  className="w-7 lg:w-full"
                />
              </div>
              <div>
                <span className=" text-sm opacity-85">Picking Up?</span>
                <div className="relative ">
                  
                <div className='flex items-center relative'>

                <span onClick={onTooggle} className='font-bold text-sm'>{dropValue}  </span>

                <MdKeyboardArrowDown onClick={onTooggle} className={`isOpen ${isOpen && "rotate-180"}`}/> 
                
                  <DropDownCommon
                    isOpen={isOpen}
                    onTooggle={onTooggle}
                    title="Nav Dropdown"
                    dropData={dropData}
                    getDropValueHandler={getDropValueHandler}

                    
                  />
                  </div>

                  
              

                </div>
              </div>
            </div>
            <div  className="box2 flex gap-3 items-center cursor-pointer">
              <div>
                <img
                  src="./assetss/asset3.png"
                  alt=""
                  className="w-7 lg:w-full"
                />
              </div>

              <div  className=" flex lg:flex-col">
                <span className="text-sm opacity-85">Cart Shiping</span>
                <span className="flex items-center gap-1 text-sm">
                  On Order{" "}
                  <span className="font-bold text-sm opacity-85 text-gray-300 ">
                    Over $100
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
