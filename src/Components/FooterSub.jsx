import React from 'react'

 let lists =[
 "About Us",
 "Information",
 "Privacy Policy",
 "Terms & Conditions"
 ]  

const FooterSub = ({heading}) => {
  return (
    <div className='flex flex-col gap-6' >
      <h1 className='font-medium text-xl' >{heading}</h1>
      <div>
        {
      lists.map((e, idx)=>(
        <p className='font-normal' >{e}</p>
      ))
        }
      </div>
    </div>
  )
}

export default FooterSub
