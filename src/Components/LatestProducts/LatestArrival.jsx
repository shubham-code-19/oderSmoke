import React, { useState } from 'react'
import ProductCard from './ProductCard';
import CardData from './CardData';

const LatestArrival = () => {
  const [filterData,setFilterData]=useState(CardData)
  return (
   
    <div className='LatestProdctusParent bg-black text-white pt-14 md:pt-32 text-2xl relative z-[2] '>
    <div className='w-[92%] lg:w-[85%] mx-auto py-10 '>
      <div className='grid gap-12 md:grid-cols-2 xl:grid-cols-4  lg::gap-5 '>

      {filterData.map((elm)=><ProductCard key={elm.id} {...elm}  />)}
      
      </div>
    </div>
    </div>
  
    
   
  )
}

export default LatestArrival;
