import React from 'react'

const GrandTotal = () => {
  return (
    <div className='border-t border-zinc-500 flex flex-col gap-4 py-3 mt-5'>
      <div className='flex justify-between font-bold'>
        <h3 className='uppercase'>Total cost</h3>
        <h3>462</h3>
      </div>
      <div>
        <button className='bg-zinc-500 rounded-xl w-full py-3 font-bold text-white '>CheckOut</button>
      </div>
    </div>
  )
}

export default GrandTotal
