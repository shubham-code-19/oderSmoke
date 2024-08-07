import React from 'react';
import HeroCard from './HeroCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';

const Hero = () => {
    const heroCardData = [
        {
            id: 1,
            img: 'asset48',
        },
        {
            id: 2,
            img: 'asset47',
        },
        {
            id: 3,
            img: 'asset49',
        },
    ];

    return (
        <>
            <Swiper
                 loop={true}
                 autoplay={{ delay: 9000, disableOnInteraction: false }}

                modules={[Autoplay]}               
                className="mySwiper"
            >
                {heroCardData.map((elm) => {
                    return (
                        <SwiperSlide key={elm.id}>
                            <HeroCard img={elm.img} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
};

export default Hero;
