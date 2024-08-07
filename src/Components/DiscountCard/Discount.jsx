import React, { useState } from 'react'
import DiscountCard from './DiscountCard'
import BrandSwiper from '../BrandSwiper'

const Discount = () => {
    const cardData=[
        {
            id:1,
            name:"pop extra straweberry",
            img:"bg-[url(./assetss/asset37.jpeg)] "
        },
        {
            id:2,
            name:"pop extra straweberry",
            img:"bg-[url(./assetss/asset35.jpeg)] "
        },
        {
            id:3,
            name:"Best E-Lequid",
            img:"bg-[url(./assetss/asset36.jpeg)] "
        },
        {
            id:4,
            name:"Best Smoker",
            img:"bg-[url(./assetss/asset38.jpeg)] "
        },
        {
            id:5,
            name:"Best Liquid",
            img:"bg-[url(./assetss/asset39.jpeg)] "
        },
        {
            id:4,
            name:"Best Smoker",
            img:"bg-[url(./assetss/asset38.jpeg)] "
        },
        {
            id:2,
            name:"pop extra straweberry",
            img:"bg-[url(./assetss/asset35.jpeg)] "
        }

    ]
    const[discountFilter,setDiscountFilter]=useState(cardData)
  return (
    <div className='DiscountParent bg-black'>
            <div className="w-[92%] xl:w-[90%] mx-auto  py-10">


            <BrandSwiper SlideCompnents={DiscountCard} SwiperData={discountFilter} largeMid="3" largeScreenSlideShow="4" Delay="5000"/>
            </div>

    </div>
  )
}

export default Discount
