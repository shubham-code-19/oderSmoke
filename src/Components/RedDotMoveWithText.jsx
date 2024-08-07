import React from 'react'
import RedDotMove from './RedDotMove'

const RedDotMoveWithText = ({text="latest arrivals products",justfiy="justify-center",fs="md:text-5xl"}) => {
  return (
    <div className={`flex items-center ${justfiy} gap-3`}>
    <div className=''>
    <RedDotMove/>
   
    </div>
     <h3 className={`font-medium text-base ${fs} font-[montserrat] capitalize`}> {text}</h3>  
   </div>
  )
}

export default RedDotMoveWithText
