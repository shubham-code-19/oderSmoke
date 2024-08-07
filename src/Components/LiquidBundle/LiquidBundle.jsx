import React from "react";
import ShowBtn from "../ShowBtn";
import GetOffDiscount from "../GetOffDiscount";

const LiquidBundle = () => {
  return (
    <div className="LiquidBundle bg-black relative">
      <div className="w-[92%] xl:w-[85% mx-auto flex flex-col lg:flex-row py-20  gap-8 relative z-[5]">
        <div className="leftCard bg-zinc-900 lg:w-[60%] xl:w-[50%] rounded-xl ">
          <div>
            <img src="./assetss/asset19.jpeg" alt="" className="rounded-xl" />
          </div>
          <div className="text-white px-6 py-8 xl:py-3">
            <h3 className="text-2xl md:text-4xl font-[montserrat] font-semibold">
              The Best E-Liquid Bundles
            </h3>
            <p className="capitalize lg:text-base text-sm lg:w-[100%] pt-5 font-[montserrat] opacity-65">
              Sell globally in minutes with localized currencies languages, and
              experie in every market. only a variety of vaping products
            </p>
            <div className="mt-10 flex flex-col gap-6 md md:flex-row justify-between  bg-red-5000">
            <div>
            <ShowBtn bg="white" textColor="Orange" btnValue="Shop Now" />

            </div>
              <div className="border flex items-center justify-center rounded-full md:px-3  py-1">
               <div>
               <GetOffDiscount />
               </div>
              </div>
            </div>
          </div>
        </div>
        <div className="RightCard flex flex-col gap-5">
          <div className="card1 flex items-center bg-zinc-900 rounded-xl text-white overflow-hidden py-8 m md:py-0">
            <div className="flex flex-col justify-center gap-5 px-5 md:px-10">
              <h3 className="text-2xl font-medium">New To Vappeing ?</h3>
              <p className="text-md capitalize">Whereas recognition of the inherent dignity</p>
              <div className="mt-4">
              <ShowBtn bg="white" textColor="Orange" btnValue="Shop Now" />

              </div>
            </div>
            <div>
              <img src="./assetss/asset20.jpeg" alt="" />
            </div>
          </div>

          <div className="card2 flex items-center bg-zinc-900 rounded-xl text-white overflow-hidden py-8 md:py-0">
            <div className="flex flex-col justify-center gap-5 px-5 md:px-10">
              <h3 className="text-2xl font-medium">New To Vappeing ?</h3>
              <p className="text-md capitalize">Whereas recognition of the inherent dignity</p>
              <div className="mt-4">
              <ShowBtn bg="white" textColor="Orange" btnValue="Shop Now" />

              </div>
            </div>
            <div>
              <img src="./assetss/asset21.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiquidBundle;
