import React from 'react'
import { IoMdStar } from "react-icons/io";


const ProductCard = ({img , name , disPrice , originalPrice , OffPercent, isHot,gcolor}) => {


  
  return (
    <div className='flex flex-col h-80 items-center border-[2px] mb-4 border-[#F6F7F8] w-[90%] ' > 
        {isHot &&
         <div className=" relative top-8 left-[-128px] z-10 left-0 bg-red-400 text-white text-lg pl-4 font-light  px-2 py-1 w-18 h-8">
        HOT
      </div>
        }
        <img   src={img && img} alt="" />
      <h1 className='font-semibold  '  >{name}</h1>
        <div className='flex gap-2' >
            <IoMdStar className='text-yellow-500 text-xl' />
             <IoMdStar className='text-yellow-500 text-xl'  />
             <IoMdStar  className='text-yellow-500 text-xl' />
              <IoMdStar  className='text-yellow-500 text-xl' />
                <IoMdStar  className='text-grey-400 text-xl' />
        </div>
        <div className="flex items-center space-x-4">
    <span style={{color:gcolor}} className="text-xl font-bold  ">$ {disPrice && disPrice}</span>
    <span className="text-lg text-gray-400 line-through">$ {originalPrice && originalPrice}</span>
    <span className="text-xl font-bold text-red-400">{OffPercent  &&  OffPercent}% Off</span>
  </div> 
    </div>
  )
}

export default ProductCard
