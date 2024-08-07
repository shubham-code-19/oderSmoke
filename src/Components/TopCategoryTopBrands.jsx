import React from 'react'
import RedDotMove from './RedDotMove'


const TopCategoryTopBrands = ({text}) => {
  return (
    <>
          <div className=' flex items-center justify-center py-16 gap-3 '>
        <span>
        <RedDotMove/>
        </span>
        <h3 className='font-bold text-xl sm:text-2xl font-[montserrat]'> {text} </h3>
        <span>
        <RedDotMove/>
        </span>


        </div>
    </>
  )
}

export default TopCategoryTopBrands
