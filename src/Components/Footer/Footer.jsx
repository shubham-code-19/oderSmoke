import React from 'react'
import RedDot from '../RedDot'
import { FaTelegramPlane } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {

    const footerData = {
        customerService: [
          "Help Portal",
          "Contact Us",
          "Delivery Information",
          "Click and collect",
          "Return And refund",
        ],
        getToKnowUs: [
          "About us",
          "news & blogs",
          "Careers",
          "Investors",
          "Contact us",
        ],
        vapeCollection: [
          "E-Cigarettes",
          "vape pens",
          "pod systems",
          "disposable vapes",
          "nicotine salt devices",
        ],
      }

      const socialIcons = [<TiSocialFacebook />,<FaTwitter />,<RiInstagramFill />, <FaYoutube />
        
        // { icon: <TiSocialFacebook />, key: 'facebook' },
        // { icon: <FaTwitter />, key: 'twitter' },
        // { icon: <RiInstagramFill />, key: 'instagram' },
        // { icon: <FaYoutube />, key: 'youtube' }
    ];

    const renderItems = (items) => (
        items.map((item, index) => (
          <div key={index} className='opacity-55 hover:opacity-100 hover:font-bold flex items-center gap-2  hover:text-Orange hover:text-bold '>
            <RedDot bg="tranparent" border="border"  />
            <span >{item}</span>
          </div>
        ))
      );
  return (
    <div className='Footer   py-5'>
            <div className="w-[92%] xl:w-[90%] mx-auto text-white   py-20 border-t border-b border-zinc-700">
               <div className='grid lg:grid-cols-4 gap-5  capitalize font-[]'>
               <div className='flex flex-col gap-4 cursor-pointer'>
                    <h2 className='font-bold'>Customer Service</h2>
                    <div className='text-xs flex flex-col gap-3 '>
                    {renderItems(footerData.customerService)}
                    </div>
                </div>
               <div className='flex flex-col gap-4 cursor-pointer'>
                    <h2 className='font-bold'>Get to know us</h2>
                    <div className='text-xs flex flex-col gap-3 '>
                    {renderItems(footerData.getToKnowUs)}

                    </div>
                </div>
               <div className='flex flex-col gap-4 cursor-pointer'>
                    <h2 className='font-bold'>Vape new collection</h2>
                    <div className='text-xs flex flex-col gap-3'>
                    {renderItems(footerData.vapeCollection)}

                    </div>
                </div>
               <div className='flex flex-col gap-4 cursor-pointer'>
                    <h2 className='font-bold'>Get Newsletter</h2>
                    <div className=' flex flex-col gap-5'>
                    <div className='w-[100%]  relative'>
                    <input type="text" placeholder='Your Email ' className='w-[95%] lg:w-[80%]  text-sm bg-zinc-800 rounded-full py-4  ps-3 border border-zinc-600 focus:outline-none' />
                    <div className='bg-Orange w-fit p-3 rounded-full absolute top-1.5 right-5  lg:right-[4.5rem]'>
                    <FaTelegramPlane />

                    </div>
                    </div>
                    <div className='socialicons flex text-xl gap-1 '>
                    {socialIcons.map(( icon,index ) => (
                    <div key={index} className='border w-fit p-3 rounded-full opacity-55 hover:opacity-100 hover:text-Orange hover:border-Orange hover:font-bold'>
                      {icon}
                    </div>
                  ))}
                    </div>
                    </div>
                </div>
               </div>
               
            </div>


            <div className='w-[92%] xl:w-[90%] mx-auto py-8 text-white'>
            <div className='grid lg:grid-cols-3 gap-5 items-center'>
            <div className='flex justify-center lg:block'>
                <img src="./assetss/asset0.svg" alt="" />
            </div>
            <div className='text-xs opacity-55'>
                <p>© Copyright 2024 Shubham All Rights Reserved</p>
            </div>
            <div className='flex justify-center '>
               <img src="./assetss/asset46.png" alt="" />
            </div>
            </div>
            </div>

    </div>
  )
}

export default Footer
