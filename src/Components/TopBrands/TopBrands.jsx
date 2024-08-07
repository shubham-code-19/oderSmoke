import React from 'react'
import TopCategoryTopBrands from '../TopCategoryTopBrands'
import BrandSwiper from '../BrandSwiper'
import TopBrandUiData from './TopBrandUiData'
const TopBrands = () => {
  const TopBrandImage=[
    {
      id:1,
      img1:"asset40"
    },
    {
      id:2,
      img1:"asset42"
    },
    {
      id:3,
      img1:"asset41"
    },
    {
      id:4,
      img1:"asset43"
    },
    {
      id:5,
      img1:"asset44"
    },
    {
      id:6,
      img1:"asset45"
    },
    {
      id:3,
      img1:"asset41"
    },
    {
      id:4,
      img1:"asset43"
    },
    {
      id:5,
      img1:"asset44"
    },
    
  ]
 
  return (
    <div className='bg-black'>
      <div className="w-[92%] xl:w-[90%] mx-auto  text-white   py-5">
            <TopCategoryTopBrands text="Our Top Brands" />
        <BrandSwiper SlideCompnents={TopBrandUiData} SwiperData={TopBrandImage}/>

      </div>
    
    </div>
  )
}

export default TopBrands
