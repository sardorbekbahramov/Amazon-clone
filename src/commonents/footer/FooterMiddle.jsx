import React from 'react'
import logo from '../../assets/logo (1).png'
import { TbWorld } from "react-icons/tb";
import { LiaFlagUsaSolid } from "react-icons/lia";

function FooterMiddle() {
  return (
    <div className=' w-full bg-amazon_light text-white'>
        <div className=' w-full cursor-pointer text-white bg-[#3f4d61] hover:bg-[#485769] duration-300 py-4'>
            <h3 className='text-center'>Back to top </h3>
        </div>
        <div className=' w-full py-10'>
            <div className='max-w-5xl mx-auto text-gray-300'>
                <div className=' w-full grid grid-cols-4'>
                    <div>
                        <h3 className=' text-white text-base font-semibold mb-3'>Get to Know Us</h3>
                        <ul className=' flex flex-col gap-2'>
                            <li className='footer_link'>Careers</li>
                            <li className='footer_link'>Blog</li>
                            <li className='footer_link'>About Amazon</li>
                            <li className='footer_link'>Investor Relations</li>
                            <li className='footer_link'>Amazon Devices</li>
                            <li className='footer_link'>Amazon Science</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className=' text-white text-base font-semibold mb-3'>Make Money with Us</h3>
                        <ul className=' flex flex-col gap-2'>
                            <li className='footer_link'>Sell products on Amazon</li>
                            <li className='footer_link'>Sell on Amazon Business</li>
                            <li className='footer_link'>Sell apps on Amazon</li>
                            <li className='footer_link'>Become an Affiliate</li>
                            <li className='footer_link'>Advertise Your Products</li>
                            <li className='footer_link'>Self-Publish with Us</li>
                            <li className='footer_link'>Host an Amazon Hub</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className=' text-white text-base font-semibold mb-3'>Amazon Payment Products</h3>
                        <ul className=' flex flex-col gap-2'>
                            <li className='footer_link'>Amazon Business Card</li>
                            <li className='footer_link'>Shop with Points</li>
                            <li className='footer_link'>Reload Your Balance</li>
                            <li className='footer_link'>Amazon Currency Converter</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className=' text-white text-base font-semibold mb-3'>Let Us Help You</h3>
                        <ul className=' flex flex-col gap-2'>
                            <li className='footer_link'>Amazon and COVID-19</li>
                            <li className='footer_link'>Your Account</li>
                            <li className='footer_link'>Your Orders</li>
                            <li className='footer_link'>Shipping Rates & Policies</li>
                            <li className='footer_link'>Manage Your Content and Devices</li>
                            <li className='footer_link'>Amazon Assistant</li>
                            <li className='footer_link'>FAQ & Help</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className='w-full py-10  border-t-[1px] border-gray-500'>
            <div className='max-w-2xl mx-auto text-gray-200'>
                <div className=' w-full flex gap-6 items-center justify-around'>
                    <div>
                        <img className='h-8 relative top-2' src={logo} alt="loogo" />
                    </div>

                    <div className='flex gap-2'>
                        <div className='border rounded-[3px] border-gray-400 py-1 px-4 cursor-pointer'>
                            <p className='text-sm flex gap-1'> <span className='relative top-[3px]'><TbWorld /></span>English</p>
                        </div>
                        <div className='border rounded-[3px] border-gray-400 py-1 px-4 cursor-pointer'>
                            <p className='text-sm'>$ USD - U.S. Dollar</p>
                        </div>
                        <div className='border rounded-[3px] border-gray-400 py-1 px-4 cursor-pointer'>
                            <p className='text-sm flex gap-1'> <span className='relative top-[2px]'><LiaFlagUsaSolid className=' size-4'/></span>United States</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default FooterMiddle