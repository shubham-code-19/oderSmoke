import React from 'react'
import RedDotMoveWithText from '../RedDotMoveWithText'


const MoveVape = () => {
    const items = ["Vape juice", "Vape Pens", "E-Vape", "E-Vape", "Vape Pens"];
    const fiveTimes = Array(10).fill();
 
  return (
    <div className='MoveVape bg-black py-3'>
    <div className='w-[92%]  xl:w-[90%] mx-auto py-20 text-white border-t border-b border-zinc-700 '>
        <div className=' moveText  '>
     
        
        </div>

        <div className='moveText'>
          <div className="cons">
          {fiveTimes.map(()=>
            items.map((text, index) => (
              <RedDotMoveWithText key={index} fs="lg:text-7xl" text={text} />
            ))
          )}
          
          </div>
        </div>
        
    </div>
    </div>
  )
}

export default MoveVape



// import React from 'react'
// import RedDotMoveWithText from '../RedDotMoveWithText'

// const MoveVape = () => {
//   const items = ["Vape juice", "Vape Pens", "E-Vape", "E-Vape", "Vape Pens"];

//   return (
//     <div className='MoveVape bg-black py-3'>
//       <div className='w-[92%] xl:w-[90%] mx-auto py-20 text-white border-t border-b border-zinc-700'>
//         <div className='moveText'>
//           <div className="cons">
//             {items.map((text, index) => (
//               <RedDotMoveWithText key={index} fs="lg:text-7xl" text={text} />
//             ))}
//             {items.map((text, index) => (
//               <RedDotMoveWithText key={index + items.length} fs="lg:text-7xl" text={text} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default MoveVape
