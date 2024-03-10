import React from 'react'

function FooterTop() {
  return (
    <div className='w-full bg-white py-6'>
        <div className=' w-full border-t-[1px] border-b-[1px] py-8'>
            <div className='w-64 mx-auto text-center'>
                <p className='text-sm'>See personalized recommendations</p>
                <div className='py-1'>
                    <button className='w-full bg-yellow-400 cursor-pointer py-1 rounded-md text-center text-sm font-semibold text-gray-800 text-shadow-md focus:outline-none border border-yellow-600'>Sign in</button>
                </div>                
                <p className='text-[12px]'>New customer? <span className=' text-blue-400 hover:text-red-500 duration-300 cursor-pointer'>Start here.</span></p>
            </div>
        </div>
    </div>
  )
}

export default FooterTop