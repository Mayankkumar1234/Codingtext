import Navbar from './Navbar';
import Main from './Main';
import Sidebar from './Sidebar';
import React, { useState } from 'react'
import Footer from './Footer';
import productData from "../Data/ProductData"

const index = () => {
 
  const [Data , setData] = useState(productData);
   const [color, setColor]  = useState("");
   

   const handleColor = (color)=>{
    setColor(color)
   }
const sortProduct = (val) => {
  if (val === "inc") {
    // ascending
    let sortedData = [...Data].sort((a, b) => a.name.localeCompare(b.name));
    setData(sortedData); 
  } else {
    // descending
    let sortedData = [...Data].sort((a, b) => b.name.localeCompare(a.name));
    setData(sortedData); 
  }
};


  return (
    <div className='h-full w-full'>
      <Navbar />
      <div className='flex ' >
   <Sidebar handleColor={handleColor} />
    <Main sortProduct={sortProduct}  gcolor={color} Data={Data}  />
      </div>
      <div>
          <Footer />
      </div>
    </div>

    
  )
}

export default index
