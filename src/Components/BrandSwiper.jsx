import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/autoplay'; // Import Swiper's Autoplay styles

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import TopBrandUiData from './TopBrands/TopBrandUiData';


const BrandSwiper = ({SlideCompnents,SwiperData,Delay=3000,largeMid=4,largeScreenSlideShow=6}) => {
   
  return (
    <Swiper
          spaceBetween={20}
          slidesPerView={6} // Adjust this to control how many slides are visible at once
          pagination={{ clickable: true }}
          className="mySwiper"
          autoplay={{
            delay: Delay, // Delay in ms between slides
            disableOnInteraction: false, // Autoplay won't be disabled on interaction
          }}
          loop={true} // Enable looping

          modules={[Autoplay]}
          breakpoints={{
              320: {
                slidesPerView: 1, // Number of slides on extra small screens
              },
              480: {
                slidesPerView: 2, // Number of slides on small screens
              },
              768: {
                slidesPerView: 3, // Number of slides on medium screens
              },
              1024: {
                slidesPerView: largeMid, // Number of slides on large screens
              },
              1280: {
                slidesPerView: largeScreenSlideShow, // Number of slides on extra large screens
              },
            }}
        >
        {SwiperData.map((elm)=>{
            return(
              <SwiperSlide >
            <SlideCompnents {...elm} />
            </SwiperSlide>
            )
          })}
          </Swiper>
  )
}

export default BrandSwiper
