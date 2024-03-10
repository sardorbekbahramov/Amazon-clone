import React, { useState } from 'react'
import { logo } from '../../assets/index'
import { IoLocationOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { allData } from './allData';
import { popularLanguages } from './lang';
import { MdShoppingCartCheckout } from "react-icons/md";
import HeaderBottom from './HeaderBottom';

function Header() {
    const [showAll, setShowAll] = useState(false);
    const [showLan, setShowLan] = useState(false);

  return (
    <div className=' w-full bg-amazon_blue fixed z-50'>
        {/* Main Header */}
        <div className=' text-white px-4 py-3 flex items-center gap-4'>
            <div className='headerHover'>
                <img className='w-24 mt-2' src={logo} alt="logo" />
            </div>

            <div className='headerHover py-[3px]'>
                <IoLocationOutline className='relative top-[6px] size-5'/>
                <p className='text-sm text-lightText -mt-1 font-light flex flex-col'>
                    Deliver to 
                    <span className='text-sm font-semibold text-white'>Uzbekistan</span>
                </p>
            </div>

            <div className=' h-10 rounded-md flex flex-grow relative bg-lightText'>
                <span onClick={()=>setShowAll( prev=> !prev )} className='w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md'>
                    All
                    <span><IoMdArrowDropdown/></span>
                </span>

                <>
                    {
                        showAll && (
                            <div>
                                <ul className=' absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue rounded-tr-md rounded-tl-md text-black p-2 flex-col gap-1 z-50'>
                                    {allData.map((item, ind) => (
                                        <li className='text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue hover:bg-gray-200 mt-1 cursor-pointer duration-200' key={ind}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )
                    }
                </>

                <input className=' h-full text-sm  text-amazon_blue flex-grow outline-none border-none px-2' type="text" placeholder='Search Amazon' />
                <span className='w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md'>
                    <FaSearch />
                </span>
            </div>

            <div onClick={()=>setShowLan( prev=> !prev )}  className='headerHover relative py-[3px]'>
                <div>
                    <p className='text-sm text-lightText -mt-1 font-light block'>Language</p>
                    <p className='flex text-sm font-semibold text-white'>
                        Eng
                        <span className='relative top-[6px] size-5'><IoMdArrowDropdown/></span>
                    </p>
                </div>
                <div className='fixed right-90'>
                    {
                        showLan && (
                            <div>
                                <ul className='fixed w-36 h-60 top-16 overflow-y-hidden overflow-x-hidden bg-white border-[1px] border-amazon_blue rounded-tr-md rounded-tl-md text-black p-2 flex-col gap-1 z-50'>
                                    {popularLanguages.map((item, ind) => (
                                        <li className='text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue hover:bg-gray-200 mt-1 cursor-pointer duration-200' key={ind}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )
                    }
                </div>

            </div> 

            <div className='flex flex-col items-start justify-center headerHover py-[3px]'>
                <p className='text-sm text-lightText -mt-1 font-light flex flex-col'>Hello, sign in</p>
                <p className='flex text-sm font-semibold text-white'>Accounts & Lists <span><IoMdArrowDropdown className='relative size-5'/></span></p>
            </div>

            <div className='flex flex-col items-start justify-center headerHover py-[3px]'>
                <p className='text-sm text-lightText -mt-1 font-light flex flex-col'>Returns</p>
                <p className='flex text-sm font-semibold text-white'>& Orders <span><IoMdArrowDropdown className='relative size-5'/></span></p>
            </div>

            <div className='flex flex-row items-start justify-center headerHover py-[3px]'>
                <MdShoppingCartCheckout className=' size-9 '/>
                <p className='text-sm font-semibold mt-4 text-whiteText'>
                    Cart 
                    <span className=' relative text-xs -top-[20px] right-9 font-semibold px-[3px] h-4 rounded-md bg-[#f3a847] text-amazon_blue'>0</span>
                </p>
            </div>
        </div>

        {/* nav header for categories */}
        <HeaderBottom/>

    </div>
  )
}

export default Header