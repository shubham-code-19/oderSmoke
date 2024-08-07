import React from 'react'

const ComeDown = ({text,val}) => {
  return (
    <div className='flex flex-col justify-center items-center h-16 w-16 border border-zinc-700 rounded-full'>
    <h5 className='font-bold text-xl'>{val}</h5>
    <h5 className='text-sm opacity-50'>{text}</h5>
</div>
  )
}

export default ComeDown
