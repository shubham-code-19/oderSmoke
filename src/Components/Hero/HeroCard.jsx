import React from "react";
import ShowBtn from "../ShowBtn";
import GetOffDiscount from "../GetOffDiscount";

const HeroCard = ({ img }) => {
  return (
    <div
      className={`HeroParent md:h-screen lg:h-full  z-0`}
      style={{
        backgroundImage: `url(./assetss/${img}.jpeg)`,
      }}
    >
      <div className="w-[92%] xl:w-[85%] h-full l mx-auto pt-48 pb-6 lg:py-20 lg:pt-60 text-white relative z-10">
       
        <GetOffDiscount/>

        <div className="">
          <h2 className="capitalize pt-5 text-3xl lg:text-7xl font-bold font-[montserrat] lg:w-[70%] xl:w-[50%] ">
            Find Everything for <span className="text-Orange">vaping</span>
          </h2>
        </div>

        <div>
          <p className="capitalize lg:text-base text-sm lg:w-[80%] xl:w-[40%] pt-5 font-[montserrat] opacity-65">
            Sell globally in minutes with localized currencies languages, and
            experie in every market. only a variety of vaping products{" "}
          </p>
        </div>
        <h3 className="pt-3 text-base opacity-60">Started Price</h3>
        <h3 className="pt-3 text-2xl font-bold"> $99.00</h3>

        <div className="btn-parent mt-10 flex  gap-5">
          <ShowBtn btnValue="shop Now" bg="Orange" textColor="white" />
          <ShowBtn btnValue="View Details" bg="white" textColor="Orange" />
        </div>
      </div>
      <div className="hidden lg:block absolute top-52 -left-12 overflow-hidden">
        <img src="./assetss/asset4.png" alt="wait for load" />
      </div>
      <div className="hidden lg:block absolute bottom-0 -right-16 heriBG-rightImg">
        <img src="./assetss/asset5.png" alt="wait for load" />
      </div>
    </div>
  );
};

export default HeroCard;
