import React, { useState } from "react";
import RedDotMoveWithText from "../RedDotMoveWithText";
import { FaPlay } from "react-icons/fa";
import TopBrands from "../TopBrands/TopBrands";
import Footer from "../Footer/Footer";

const ModernLife = () => {
    const[playVideo,setPlayVideo]=useState(false)
  return (
    <div className="Moderlife py-5">
      <div className="w-[92%] xl:w-[90%] mx-auto gap-5   py-5 flex flex-col lg:flex-row  justify-between items-center">
        <div className="left w-full lg:w-[50%]  relative h-[400px]">
        <div className="flex  justify-center items-center text-3xl bg-[url(../assetsAbout/aboutCardBG.jpg)] bg-no-repeat bg-cover w-[100%] h-[100%]">
    <div onClick={()=>setPlayVideo(!playVideo)} className=" cursor-pointer bg-white playBtn relative p-7 rounded-full flex justify-center items-center">
    <FaPlay className="text-red-700" />

    </div>
        </div>
        <iframe className={`${playVideo?"block":"hidden"} top-0 absolute w-[100%] h-[100%]`}  src="https://www.youtube.com/embed/mulBgFppy-c?si=ie_vO-OIZJl_KeMC" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



        </div>
        <div className="right text-white lg:w-[50%] flex flex-col gap-5">
          <div>
           
            <RedDotMoveWithText
              text="We are here to increase your modern Life"
              justfiy="justfiy-start"
            />
          </div>
          <p>
           
            Sell globally in minutes with localized currencies languages, and
            experie in every market. only a variety of vaping products globally
            in with localized currencies languages globally in with localized
            currencies languages Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Neque exercitationem perspiciatis rem sed ipsum
            assumenda nemo praesentium blanditiis tempora consequuntur cum
            beatae saepe facere quis dolore dignissimos nihil.
          </p>

          <div>
            <button
              type="Submit"
              className="group bg-Orange relative py-4 px-5 rounded-xl text-white font-medium text-sm contatctBtn"
            >
              <h3 className="">More About US</h3>
            </button>
          </div>
        </div>
      </div>
              <TopBrands/>
             

    </div>
  );
};

export default ModernLife;
