import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdPhoneInTalk } from "react-icons/md";
import { IoMdMailUnread } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import ContactBgPart from "../ContactBgPart";


const ContactUs = () => {
  const[accespt,setAccespt]=useState(false)

  return (
    <div className="Contact_us bg-black  py-5">
   <ContactBgPart Contact="Contact US" />

    <div className="FormSection ">
      <div className="flex flex-col lg:flex-row justify-center w-[92%] xl:w-[90%] mx-auto  gap-4">
        <div className="lef conatctLeft  bg-no-repeat flex flex-col gap-10 py-[30px] px-[20px] lg:w-[50%] text-white ">
          <h2 className="font-bold text-4xl w-[80%] capitalize">
            Have something in mind? Let's talk.
          </h2>
          <p className="w-[65%]">
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim.
          </p>
          <div>
            <img src="../assetsContact/asset4.png" alt="" />
          </div>
          <div className="Adressss flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-[#ffffff65] p-2  ">
                <FaLocationDot />
              </div>
              <p>Chandigarh, Coder House</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-[#ffffff65] p-2  ">
                <MdPhoneInTalk />
              </div>
              <p>+91 8168708043</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-[#ffffff65] p-2  ">
                <IoMdMailUnread />
              </div>
              <p>shubham.code.19@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="right lg:w-[50%]  ">
          <div className="FormParent flex flex-col gap-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="text-white placeholder:text-white bg-zinc-800 focus:outline-0 focus:border-red-800 focus:border-[2px] border border-zinc-600 w-[100%] py-4 px-5 rounded-lg"
              />
            </div>
            <div>
              <input
                type="emial"
                placeholder="Email"
                className="text-white placeholder:text-white  bg-zinc-800 focus:outline-0 focus:border-red-800 focus:border-[2px] border border-zinc-600 w-[100%] py-4 px-5 rounded-lg"
              />
            </div>
            <div className="flex items-center justify-between text-white bg-zinc-800 focus:outline-0 focus:border-red-800 focus:border-[2px] border border-zinc-600 w-[100%] py-4 px-5 rounded-lg">
              <h5>Select Subject</h5>
              <IoMdArrowDropdown />
            </div>

            <div>
           
              <textarea
                name=""
                id=""
                placeholder="Message"
                className="text-white  min-h-[200px] placeholder:text-white bg-zinc-800 focus:outline-0 focus:border-red-800 focus:border-[2px] border border-zinc-600 w-[100%] py-4 px-5 rounded-lg resize-none overflow-hidden	"
              ></textarea>
            </div>
            <div className="flex text-white gap-2">
                <div onClick={()=>setAccespt(!accespt)} className={`h-[5px] w-[5px] p-[0.5rem] flex items-center justify-center  rounded-full border-2 border-Orange ${accespt&&"bg-Orange"}`}>
                    <div className={`p-[0.2rem] rounded-full bg-Orange ${accespt&& "bg-white"}`}></div>
                </div>
                <p className="capitalize">
                I accept your terms & conditions</p>
            </div>

            <div>
                <button type="Submit" className="group bg-Orange relative py-4 px-5 rounded-xl text-white font-medium text-sm contatctBtn"><h3 className="">Submit Now</h3></button>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="mapSection pt-20">
    <iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224568.26319347904!2d76.67789185153582!3d28.422904332687047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1722858820442!5m2!1sen!2sin"
// width={10000}
// height={400}
className=" md:h-[30rem] w-[100%]"
style={{ border: 0 }}
allowFullScreen=""
loading="lazy"
referrerPolicy="no-referrer-when-downgrade"
/>

    </div>
  </div>
  )
}

export default ContactUs
