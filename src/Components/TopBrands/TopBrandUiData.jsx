import React from 'react'

const TopBrandUiData = ({img1}) => {
  return (
    <div className='border border-zinc-600 flex justify-center md:block md:w-fit px-16 py-5 rounded-2xl barndImage-box'>
                <img src={`./assetss/${img1}.png`} alt="" className='brandImage-hove' />
            </div>
  )
}

export default TopBrandUiData;
