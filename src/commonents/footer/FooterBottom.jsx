import React from 'react'
import { footerBottomItem } from '../../constants/index'

function FooterBottom() {
  return (
    <div className=' w-full bg-footerBottom py-8'>
        <div className=' max-w-5xl mx-auto'>
            <div className=' w-full grid grid-cols-7 gap-3 place-content-center text-gray-400'>
                {
                    footerBottomItem.map((item)=> {
                        return(
                            <div className='group' key={item._id}>
                                <h3 className='footerBottomTitle'>{item.title}</h3>
                                <p className='footerBottomText'>{item.des}</p>
                            </div>
                        )
                    })
                }
            </div>

            <div className=' flex flex-col mt-9 justify-center items-center'>
                <div className=' flex gap-3'>
                    <p className='text-[12px] text-[#DDD] cursor-pointer hover:underline'>Conditions of Use</p>
                    <p className='text-[12px] text-[#DDD] cursor-pointer hover:underline'>Privacy Notice</p>
                    <p className='text-[12px] text-[#DDD] cursor-pointer hover:underline'>Your Ads Privacy Choices</p>
                </div>
                <div>
                    <p className='text-[12px] text-[#DDD]'>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FooterBottom