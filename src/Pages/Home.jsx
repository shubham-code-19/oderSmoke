import React from 'react'
import Hero from '../Components/Hero/Hero'
import TopCategory from '../Components/TopCategory/TopCategory'
import LiquidBundle from '../Components/LiquidBundle/LiquidBundle'
import LatestProdctus from '../Components/LatestProducts/LatestProdctus'
import BestFav from '../Components/BestFavourite/BestFav'
import LatestArrivals2 from '../Components/LatestArrivals2/LatestArrivals2'
import MoveVape from '../Components/MoveVape/MoveVape'
import Discount from '../Components/DiscountCard/Discount'
import TopBrands from '../Components/TopBrands/TopBrands'
const Home = () => {
  return (
    <>
      
      <Hero/>
      <TopCategory/>
      <LiquidBundle/>
      <LatestProdctus/>
      <BestFav/>
      <LatestArrivals2/>
      <MoveVape/>
      <Discount/>
      <TopBrands/>
      
    </>
  )
}

export default Home
