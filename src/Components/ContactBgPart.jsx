import React from 'react'
import { FaHome } from "react-icons/fa";
import { MdOutlineWifiCalling3 } from "react-icons/md";
const ContactBgPart = ({Contact}) => {
  return (
    <div className="flex pt-44 justify-center items-center ">
      <div className="flex flex-col justify-center items-center text-white h-[400px] w-[100%] bg-[url(../assetsContact/asset6.jpeg)]">
        <h1 className="text-4xl font-bold">{Contact}</h1>
        <div className="flex items-center gap-2 font-bold">
          <FaHome />
          <h6>Home</h6>
          <MdOutlineWifiCalling3 />
          <h6>{Contact}</h6>
        </div>
      </div>
    </div>
  )
}

export default ContactBgPart
