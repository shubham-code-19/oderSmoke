import React from 'react'
import RedDotMoveWithText from '../RedDotMoveWithText'
import ShowBtn from '../ShowBtn'
import GetOffDiscount from '../GetOffDiscount'

const BestFav = () => {
  return (
    <div className='bestfavorite bg-black pt-10 pb-5' >
      <div className='  bestFavBgImage pb-8 md:pb-0' >
      <div className='w-[92%] xl:w-[85%] mx-auto flex flex-col lg:flex-row gap-16 text-white'>
            <div className="left lg:w-4/6">
                <div>
                    <img src="./assetss/asset30.png" alt="" />
                </div>
            </div>
            <div className="right   flex flex-col   justify-center  gap-y-8">
            
                <RedDotMoveWithText text="Find your best favourite" justfiy="justfiy-start"/>
                <p className="capitalize lg:text-base text-sm  pt-5 font-[montserrat] opacity-65">
              Sell globally in minutes with localized currencies languages, and
              experie in every market. only a variety of vaping products
            </p>
            <div className='flex gap-3 md:gap-5 self-start   '>
                <ShowBtn bg="Orange" btnValue="Shop Now"/>
                <div className='border border-zinc-700 rounded-full flex items-center px-2 md:px-3 text-xs sm:text-xl lg:text-sm'>
                <GetOffDiscount/>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BestFav
