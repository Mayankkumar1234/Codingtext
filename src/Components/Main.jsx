import React, { useEffect, useState } from 'react'
import shoe from  "../Data/Images/shoes-shoe-png-transparent-shoe-images-pluspng-17 1.png"
import FilterPanel from './FilterPanel'
import ProductCard from './ProductCard' 

const Main = ({Data, gcolor,sortProduct}) => {


  const [active , setActive] = useState(1)
   const  [product , setProduct] = useState(Data)
const displayProduct = ()=>{
  setProduct([])
  const currProduct = (active -1 )*6;
  for(let i=currProduct;i<currProduct+6;i++){
   setProduct(prev=>[...prev, Data[i]])
  }
}

  useEffect(()=>{
    displayProduct()
  },[active])

  return (
   <div className='w-full h-full mt-4'>
     <div className='flex bg-[#40BFFF] h-[38vh] w-[98%] justify-between items-center pl-12 ' >
      <div className='flex flex-col  items-start text-white  text-2xl  ' >
        <h1>Adidas Men Running <br /> <span>Sneakers</span> </h1>
        <p className='text-xs font-medium' >Performance and design. Taken right to the edgs</p>
        
       <button className="  bg-[#45c6ff] text-white font-semibold text-xs uppercase  pt-8 ">
      SHOP NOW
      <span className="block ml-8  left-1/2 -translate-x-1/2 bottom-[-6px] w-12   border-b-2 border-white"></span>
    </button>
      </div>
      <div>
        <img className='w-[85%] pt-8' src={shoe} alt="" />
      </div>
    </div>
    <FilterPanel sortProduct={sortProduct} />
    <div className='grid grid-cols-3 grid-rows-2 gap-6 px-0 py-0 relative  ' >
     {
      product.map((e , idx)=>(
        <ProductCard key={idx} img={e.img} name={e.name} disPrice={e.disPrice} originalPrice={e.originalPrice} OffPercent={e.discount} isHot= {e.isHot} gcolor={gcolor}   />
      ))
     }
    </div>
    <div className='flex w-[95%] justify-center item-center my-4 bg-[#F7F7F9]  ml-4' >
              {[1, 2, 3, 4, 5].map((n) => (
          <span
            key={n}
            className={`mx-2 cursor-pointer flex items-center justify-center w-12 h-12  ${
              active === n
                ? "bg-sky-400 text-white font-semibold"
                : "text-gray-700"
            }`}
            onClick={() => {setActive(n) 
            }}
          >
            {n}
          </span>
        ))}
    </div>

   </div>
  )
}

export default Main
