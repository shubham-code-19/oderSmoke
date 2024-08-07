import React from 'react'

const ShowBtn = ({bg,textColor,btnValue}) => {
    // console.log(bg,textColor,btnValue)
  return (
    <>
      <a href="#" className={`bg-${bg} text-${textColor}  py-3 px-5 rounded-full capitalize font-semibold text-sm`}>{btnValue}</a>
    </>
  )
}

export default ShowBtn
