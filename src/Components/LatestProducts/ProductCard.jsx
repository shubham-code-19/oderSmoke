import React from 'react'
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";

import { AddData } from '../DataManuPlate/DataManuPlate';


const ProductCard = (props) => {
  return (
    <div className="group  card hover:-translate-y-4 duration-500  border border-zinc-700 rounded-xl  ">
    <div className=' px-5 py-8'>
    <div className='flex justify-center relative'>

        <img className='group-hover:opacity-0 duration-500' src={`./assetss/${props.img1}.png`} alt="" />
        <img className=' opacity-0 absolute group-hover:opacity-100 duration-500' src={`./assetss/${props.img2}.png`} alt="" />
        <div className='border border-zinc-700 self-start p-1 rounded-full text-sm  opacity-0 group-hover:opacity-100 duration-500 '>
        <IoMdHeartEmpty />

        </div>
      </div>
     
      <div className='flex flex-col items-center md:items-start gap-3 pt-5'>
        <h2 className='capitalize text-lg font-bold'>{props.name}</h2>
        <div className='flex gap-4 font-semibold text-lg'>
          <h6 className='line-through text-zinc-500	'>$ {props.oldPrice}</h6>
          <h6 className='text-Orange '>$ {props.newPrice}</h6>
        </div>
        <div className='StartParent text-orange-400 flex gap-1 text-sm'>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />

        </div>

      </div>
   
    </div>
    <div onClick={()=>AddData(props)} className=' cursor-pointer AddToCartLatestArrival rounded-xl flex justify-center  border border-zinc-800 pt-3 items-center text-base py-5 font-bold gap-3'>
      <IoCartOutline className='text-Orange text-[1.5rem]' />
      <p>Add to Cart</p>
      </div>
      </div>
  )
}

export default ProductCard
