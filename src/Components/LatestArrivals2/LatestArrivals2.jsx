import React from 'react'
import GetOffDiscount from '../GetOffDiscount'
import RedDotMoveWithText from '../RedDotMoveWithText'
import RedDot from '../RedDot'
import ComeDown from './ComeDown'
import SwiperArrival from './SwiperArrival'

const LatestArrivals2 = () => {
  return (
    <div className='LatestArrivals2 bg-black'>
        <div className='w-[92%] xl:w-[90%] mx-auto text-white flex flex-col   xl:flex-row justify-center  xl:justify-between py-20 lg:py-40'>
          
           <div className="left flex  flex-col gap-5  xl:w-[50%]">
            <div className='flex  flex-col gap-5 border-b pb-8 border-zinc-600'>
            <GetOffDiscount/>
           <RedDotMoveWithText justfiy="justfiy-start"/>
           
           <div className='flex gap-3 text-2xl'>
            <h6 className='line-through opacity-45'>$99.00</h6>
            <h6 className=' font-bold'>$49.00</h6>
           </div>
            
          <div className='lg:w-[90%]'>
          <p className='capitalize'>There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected humour, or randomised Words Which</p>
          </div>  

          <div className='flex flex-col md:flex-row gap-11 lg:gap-3'>
          <div className='flex items-center gap-2'>
          <RedDot bg="white"/>

                <h6>100% Natural</h6>
            </div>
            <div className='flex items-center gap-2'>
                <RedDot bg="white"/>
                <h6>Coupon $61.99, Code:W2</h6>
            </div>
            <div className='flex items-center gap-2'>
            <RedDot bg="white"/>
            <h6>30 Day Refund</h6>
            </div>
          </div>
            </div>
            <div className='flex flex-col md:flex-row gap-9 lg:items-center'>
                <div className='flex flex-col gap-2'>
                    <h6 className='font-semibold'>Hury Up !</h6>
                    <span>Offer End in</span>
                </div>
                <div className='flex gap-1'>
                    <ComeDown val="-246" text="Day"/>
                    <ComeDown val="-14" text="Hr"/>
                    <ComeDown val="-14" text="Min"/>
                    <ComeDown val="-39" text="Sec"/>
                </div>
            </div>

           </div>

           <div className="right  flex justify-center mt-20 xl:mt-0 ">
           <SwiperArrival/>
           </div>
        </div>

    </div>
  )
}

export default LatestArrivals2
