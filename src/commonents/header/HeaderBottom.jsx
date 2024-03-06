import React, { useEffect, useRef, useState } from 'react'
import {motion} from 'framer-motion'
import { FaBars, FaChevronDown } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import SideBar from './SideBar';

function HeaderBottom() {
    const ref = useRef();
    const [sideBar, setSideBar] = useState(false);

    useEffect(()=> {
        document.body.addEventListener('click', (e)=> {
            if(e.target.contains(ref.current)) {
                setSideBar(false)
            }
        })
    }, [ref, sideBar]);

  return (
    <div className='w-full flex items-center px-4 h-[36px] bg-amazon_light text-white'>
        <div>
            <ul className='flex flex-row items-center tracking-wide'>
                <li onClick={()=>setSideBar(true)} className='headerHover gap-1'><FaBars /> All</li>
                <li className='headerHover gap-1'> Today's Deals</li>
                <li className='headerHover gap-1'> Customer Service</li>
                <li className='headerHover gap-1'> Registry</li>
                <li className='headerHover gap-1'> Gift Cards</li>
                <li className='headerHover gap-1'> Sell</li>
            </ul>

            {
                sideBar && (
                    <div className=' w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50'>
                        <div className='w-full h-full relative'>
                            <motion.div ref={ref}
                                initial={{x: -500, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: .5}} 
                                className='w-[350px] h-full bg-white border border-black'>
                                <div className=' w-full cursor-pointer bg-amazon_light text-white py-2 px-6 flex items-center gap-4'>
                                    <MdAccountCircle className=' size-6'/>
                                    <h2 className=' font-titleFont font-bold text-[22px] tracking-wide'>Hello, Sign In</h2>
                                </div>

                                <SideBar 
                                    title='Digital Content & Devices'
                                    one='Amazon Music'
                                    two='Kindle E-readers & Books'
                                    three='Amazon Appstore'
                                />
                                <SideBar
                                    title='Shop by Department'
                                    one='Electronics'
                                    two='Computers'
                                    three='Smart Home'
                                    four='Arts & Crafts'
                                    five= {`See all ${<FaChevronDown />}`}
                                />
                                <SideBar
                                    title='Programs & Features'
                                    one='Gift Cards'
                                    two='Shop By Interest'
                                    three='Amazon Live'
                                    four='International Shopping'
                                    five= {`See all ${<FaChevronDown />}`}
                                />
                                <SideBar
                                    title='Help & Settings'
                                    one='Your Account'
                                    two={`English`}
                                    three='United States'
                                    four='Customer Service'
                                    five='Sign in'
                                />

                                <span onClick={()=> setSideBar(false)} className='cursor-pointer absolute top-[1px] left-[360px] w-10 h-10 text-blue-900 flex items-center justify-center border border-t-gray-800 bg-gray-200 hover:bg-red-500 hover:text-white duration-300'>
                                    <FaXmark/>
                                </span>
                            </motion.div>

                        </div>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default HeaderBottom