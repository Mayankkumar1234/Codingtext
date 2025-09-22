import React from 'react'
import FooterSub from './FooterSub'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-[#BCDDFF] w-full py-8 pl-8 pr-24 flex flex-col gap-8' >
       <div className='flex justify-around pb-8' >
         <div className='w-[20%] flex flex-col gap-4' >
        <div className='flex gap-4' >
          <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center relative">
            <div className="w-3 h-3 bg-white rotate-45"></div>
          </div>
          <h1 className='font-semibold text-xl'  >E-comm</h1>
        </div>
        <p className='text-xs text-start' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut similique ipsum iste tempora laudantiu dolorem   rerum nisi, quisquam,  </p>
      </div>
      <div className='w-[20%]' >
        <h1 className='font-medium' >Follow Us</h1>
        <p className='text-xs' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur a busdam aperiam cumque asperiores natus! Ut, amet recusandae.</p>
        <div className='flex gap-4' >
          <FaFacebookF className='text-[#385C8E]' />
          <FaTwitter className='text-[#03A9F4]' />
        </div>
      </div>
      <div  >
       <h1 className='font-medium'>Contact Us</h1>
       <p>E-Comm , 4578 <br />
       Marmora Road , <br />
       Glasgow D04 89GR </p>
      </div>
       </div>
      <div className='flex  justify-around' >
       <FooterSub  heading={"Information"} /> 
 < FooterSub heading={"Service"}   />
 < FooterSub heading={"My Account"}   />
 < FooterSub heading={"Our Offers"}   /> 
      </div>
      <hr className='border-b-[1px] border-white w-[86%]   ml-24' />
      <div className='flex justify-between px-16'>
       <p className='text-[#C1C8Ce] text-medium ' > 2018 Ecommerce theme by www.bisenbaev.com  </p>
       <div className='flex gap-2' >
        { [ {
          logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Western_Union_logo.svg/2560px-Western_Union_logo.svg.png"
         },{
          logo:"https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
         },{
          logo:"https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
         },{
          logo:"https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
         }].map((e, idx)=>(
          <img src={e.logo} alt="" className='w-[50px] h-6' />
         ))}
       </div>
      </div>
    </div>
  )
}

export default Footer
