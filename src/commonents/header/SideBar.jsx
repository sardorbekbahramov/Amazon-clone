import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function SideBar({title, one, two, three}) {
  return (
    <>
      <div className=' pb-7 border-b-[1px] border-b-gray-300'>
          <h3 className='relative top-3 cursor-text text-lg font-bodyFont font-bold mb-1 px-6'>{title}</h3>
          
          <div className=''>
            <ul className='flex flex-col  top-5 relative '>
                <li className='sidebarHover'>{one}<span><MdOutlineKeyboardArrowRight className=' size-7 text-gray-400' /></span></li>
                <li className='sidebarHover'>{two}<span><MdOutlineKeyboardArrowRight className=' size-7 text-gray-400'/></span></li>
                <li className='sidebarHover'>{three}<span><MdOutlineKeyboardArrowRight className=' size-7 text-gray-400'/></span></li>
                
            </ul>
          </div>
        </div>
    </>
  )
}

export default SideBar