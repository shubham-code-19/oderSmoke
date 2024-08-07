import React, { useEffect, useState } from 'react'
import CartItems from './CartItems'
import OrderSuumary from './OrderSuumary'
import GrandTotal from './GrandTotal'

const Cart = () => {

  const [MyCartData,setMyCartData]=useState([])

  useEffect(()=>{
    	  let CartData = localStorage.getItem("cartdata");
        setMyCartData(JSON.parse(CartData))
  },[])

  return (
    <div className='CartParent bg-black py-60'>
            <div className="w-[92%] xl:w-[90%] mx-auto  py-20 flex flex-col  gap-10 md:flex-row  ">
              <div className='w-[70%] bg-white min-h-[400px] px-10 py-8 rounded-tl-3xl rounded-bl-3xl'>
              <div className='flex justify-between font-bold border-b-2 pb-5 text-2xl'>
              <h3>Shopping Cart</h3>
              <h3>3 Items</h3>
              </div>
              <div className='flex justify-between font-bold  uppercase mt-5'>
              <h5 className='opacity-55'>Product Details</h5>
              <div className='flex gap-10 '>
                <h6 className='opacity-55'>Qunanity</h6>
                <h6 className='opacity-55'>Price</h6>
                <h6 className='opacity-55'>total</h6>
              </div>
              </div>

              {MyCartData&&  MyCartData.map((info)=> <CartItems MyCartData={info} />)}
              </div>

              <div className='w-[30%] bg-slate-100 min-h-[400px] px-16 py-8 rounded-tr-3xl rounded-br-3xl'>
              <div className='flex justify-between font-bold border-b-2 pb-5 text-2xl'>
              <h3>Order Summary</h3>
              </div>
              <div className='flex justify-between font-bold  uppercase mt-5 opacity-55'>
              <h5 >Items </h5>
               <h5 >$Cart Total</h5>
              </div>

              <OrderSuumary/>
              <OrderSuumary/>
              <OrderSuumary/>
              <GrandTotal/>

              </div>
            </div>
    </div>
  )
}

export default Cart
