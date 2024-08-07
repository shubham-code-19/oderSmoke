import React, { useState } from 'react'
import RedDot from '../RedDot'
import LatestArrival from './LatestArrival'
import RedDotMoveWithText from '../RedDotMoveWithText'


const LatestProdctus = () => {
    const[active,setActive]=useState("Latest")
  return (
   <>
     <div className='LatestProdctusParent bg-black text-white md:pt-12 lg:pt-32 text-2xl relative '>
    <div className='w-[92%] lg:w-[85%] mx-auto border-b border-zinc-00 pb-8'>
   <div className=' flex justify-between gap-5 flex-col xl:flex-row'>
   <RedDotMoveWithText text="Find your best favourite" justfiy="justfiy-start"/>
   <div className='flex  items-center justify-center text-xs md:text-sm gap-2 md:gap-5'>
      <div className='flex items-center gap-3'>
      {active.toLowerCase()=="Latest".toLowerCase()&& <RedDot/>}
       
            <h6 className={`hover:font-bold hover:opacity-100 opacity-80 ${active.toLowerCase()=="Latest".toLowerCase()&&"font-bold opacity-100"}`} onClick={()=>{setActive("Latest")}}>Latest items</h6>

        </div>
        <div className='flex items-center gap-3'>
        {active.toLowerCase()=="Top".toLowerCase()&& <RedDot/>}

        <h6 className={`hover:font-bold hover:opacity-100 opacity-80 LatestTopRating ${active.toLowerCase()=="Top".toLowerCase()&&"font-bold opacity-100"}`} onClick={()=>{setActive("Top")}}>Top Rating</h6>

        </div>
        <div className='flex items-center gap-3'>
        {active.toLowerCase()=="Featured".toLowerCase()&& <RedDot/>}

        <h6 className={`hover:font-bold hover:opacity-100 opacity-80  ${active.toLowerCase()=="Featured".toLowerCase()&&"font-bold opacity-100"}`} onClick={()=>{setActive("Featured")}}>Featured Products</h6>

        </div>
      </div>
   </div>
    </div>
     
    </div>

    <LatestArrival/>
   </>
    
  )
}

export default LatestProdctus;
