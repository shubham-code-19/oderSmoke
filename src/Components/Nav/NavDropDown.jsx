import React from 'react'

const NavDropDown = ({info}) => {
  return (
    <>
                    <ul className="group-hover:scale-100  duration-500 absolute scale-0 bg-white text-black origin-top-left top-[30px] w-40 py-3 px-3 flex flex-col gap-5 rounded-xl justify-center">
               {info.map((elm)=>{
                    return(
                        <>
                        <li className="hover:translate-x-6 hover:text-Orange duration-300">{elm} </li>

                        </>
                    )
               })}
              </ul>
    </>
  )
}

export default NavDropDown
