import React, { useEffect, useState } from 'react'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { deletItem } from '../DataManuPlate/DataManuPlate';
const CartItems = ({MyCartData}) => {
const {img1,name,newPrice,id}=MyCartData.data;

console.log("user id", id)

const decre=(id)=>{
  console.log("id",id)
   deletItem(id)
}
 
useEffect(()=>{
  decre()
},[id])
  return (
    <>
   
            <div className='flex justify-between font-bold  uppercase mt-8'>
    <div className='flex gap-8 '>
       <div className='w-[120px] h-[120px]'>
       <img className=' rounded-full w-[100%] h-[100%]' src={`./assetss/${img1}.png`} alt="wait" />
       </div>
        <div className='flex flex-col gap-2  justify-center items-start'>
        <h6 className='text-xl font-bold capitalize'>{name}</h6>
        <button type='button ' className='font-medium bg-zinc-800 text-white px-4 py-2 rounded-xl'>Remove</button>
        </div>
    </div>
    <div className='flex gap-10  items-center '>
      <div className='opacity-55 flex gap-3  items-center'>
      <FaMinus onClick={()=>decre(id)}  />
        <h3 className='border text-bla px-4 py-2 bg-zinc-500 rounded-full'>
           {MyCartData.count}
        </h3>
        <FaPlus />

      </div>
      <h6 className='opacity-55'>$ {newPrice}</h6>
      <h6 className='opacity-55'>$ {newPrice*MyCartData.count}</h6>
    </div>
    </div>
     
    </>
  )
}

export default CartItems
