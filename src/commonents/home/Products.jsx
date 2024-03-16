import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { FaStar } from "react-icons/fa";


function Products() {

  // async function amazonProduct() {
  //   const produts = await axios.get('https://fakestoreapiserver.reactbd.com/nextamazon')
  //   return produts
  // }
  // amazonProduct()

  const data = useLoaderData();
  const productdata = data.data;
    

  return (
    <div className=' max-w-screen-2xl mx-auto grid grid-cols-4 gap-10 px-4 relative bottom-16'>
      {
        productdata.map((item )=> (
          <div key={item.id} className=' bg-white h-auto border-[1px] border-gray-200 px-6 py-4 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4'>
            <div className=' w-full h-auto flex items-center justify-center'>
              <img className=' w-52 h-64 object-contain' src={item.image} alt="img" />
              <span className=' absolute -top-0 right-2 text-gray-400 text-sm'>{item.category}</span>
            </div>
            <div className='px-4'>
              <div className='flex items-center justify-between'>
                <h2 className=' font-semibold tracking-wide text-[19px] text-amazon_blue'>{item.title.substring(0, 16)}</h2>
                <p>${item.price}</p>
              </div>

              <div>
                  <p className='text-sm mb-1'>{item.description.substring(0, 90)}...</p>
                  <div className=' flex text-yellow-400 gap-[2px]'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div>
                    <button className=' w-full font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-500 border-yellow-500  py-1.5 rounded-md mt-3 cursor-pointer'>Add to cart</button>
                  </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Products