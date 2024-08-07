import React from 'react'

const RedDot = ({bg="Orange",border}) => {
  return (
    <>
    
                  <span className={`h-2 w-2 inline-block bg-${bg} ${border} rounded-full`}></span>

    </>
  )
}

export default RedDot
