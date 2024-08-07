import React, { useState } from 'react'
import TopCategoryCard from './TopCategoryCard'
import topCategoryCardData from './TopCategoryData'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import TopCategoryTopBrands from '../TopCategoryTopBrands';

const TopCategory = () => {
  const [topCateData,setTopCateData]=useState(topCategoryCardData)
  return (
    <div className='TopCategory bg-black text-white '>
      <div className='w-[92%] lg:w-[85%] mx-auto py-46 border-b pb-16 border-zinc-700'>
        <TopCategoryTopBrands text="Our Top Categories" />

        <Swiper
                        slidesPerView={6}
                        modules={[Autoplay]}               


                 loop={true}
                 autoplay={{ delay: 4000, disableOnInteraction: false }}
                 

                className="mySwiper"
                breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
        1299: {
          slidesPerView: 6,
          spaceBetween: 50,
        },
      }}
            >
       
        {topCateData.map(( elm,index)=>{
          return  <SwiperSlide>
        <TopCategoryCard key={index} {...elm} />
        </SwiperSlide>

        })}

      </Swiper>

        
      </div>
    </div>
  )
}

export default TopCategory
