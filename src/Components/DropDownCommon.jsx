import React, { useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";


const DropDownCommon = ({isOpen,onTooggle,dropData,getDropValueHandler,topNavCountry}) => {
  
  const[topCuurentValue,settopCurrentValue]=useState()
  return (
    <>
       {isOpen&& <ul className='z-[400] absolute min-h-[120px] min-w-[120px] top-10 bg-white text-black px-2 rounded py-4 flex flex-col gap-5'>
         { dropData.map((elm,index)=>{
            return(
              <li onClick={()=>{onTooggle(),getDropValueHandler(elm)}} key={index} className={` ${topNavCountry==elm?"font-bold":""}`}
>{elm}</li>
              
            )
          })}
        </ul>}
      
     
    </>
  )
}

export default DropDownCommon
