import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const swiperData = [
  {
    id: 1,
    img: 'asset32.png',
  },
  {
    id: 2,
    img: 'asset33.png',
  },
  {
    id: 3,
    img: 'asset32.png',
  },
  {
    id: 4,
    img: 'asset33.png',
  },
];

const SwiperCard = () => {
  return (
    <>
    
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mySwiperRounded rounded-full w-[100%] h-[100%] lg:h-[470px] lg:w-[470px]     flex items-center justify-center"
      >
      
        {swiperData.map((elm,index) => (
          
          <SwiperSlide key={elm.id} className="flex items-center justify-center h-full">
            <img src={`./assetss/${elm.img}`} alt={`Slide ${elm.id}`} className="h-3/4 w-3/4"   />
            
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperCard;
