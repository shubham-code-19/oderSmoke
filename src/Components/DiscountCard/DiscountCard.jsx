import React from 'react'
import ShowBtn from '../ShowBtn'

const DiscountCard = ({name,img}) => {
    
  return (
    <div className={`px-10  py-5 ${img} 			bg-cover	 flex flex-col justify-between  rounded card h-[350px] lg:h-[400px]  text-white discoundCrad`} >

                    <div className='flex font-bold flex-col uppercase   h-[80px] w-[80px] rounded-full items-center justify-center bg-white text-Orange '>
                        <span>50%</span>
                        <span>Off</span>
                    </div>
                    <div className='capitalize flex flex-col gap-5'>
                        <h5 className='font-bold text-xl'>{name}</h5>
                        <p>Bets e Liquid From Our Huge Collection</p>
                        <div>
                        <ShowBtn bg="white" textColor="Orange" btnValue="Shop now" />

                        </div>
                    </div>
                    </div>
  )
}

export default DiscountCard
