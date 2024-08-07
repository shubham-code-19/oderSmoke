import React from 'react'

const TopCategoryCard = (props) => {
    // console.log(props.bgImg)
    
  return (
   <div className='group  CardParent flex items-center justify-center flex-col gap-5'>
    <div className='border border-zinc-700 rounded-full p-5 '>
    <div   className='bg-zinc-900 group-hover:bg-transparent duration-300 h-36 w-36 relative overflow-hidden CardParentChild  flex justify-center items-center rounded-full'>
        <img className='absolute z-10 ' src={`./assetss/${props.bgImg}`} alt="wait" />
        <img className='absolute  hidden group-hover:block' src={`./assetss/${props.cartBgImg}`} alt="wait" />
      </div>
    </div>
      <h3 className='font-bold text-xl group-hover:text-Orange duration-300'>Best {props.name}</h3>
   </div>
  )
}

export default TopCategoryCard
