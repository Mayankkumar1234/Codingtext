import React from 'react'
import SideBarBrand from './SideBarBrand'
import Range from './Range'

let arrDeals = [
  {
    name:"Nike",
    count:2
  },{
    name:"Airmax",
    count:48
  },
  {
    name:"Nike",
    count:14,
  },{
    name:"Adidas",
    count:15
  },{
    name:"Vans",
    count:23
  },{
    name:"All Stars",
    count:1
  },{
    name:"Adidas",
    count:98
  }

]
const color =[
  "red", "black","yellow","pink","blue","#EFDFDF"
]

 

const Sidebar = ({handleColor}) => {
  return (
    <div className='h-full mx-4 mt-[4px] '>
      <SideBarBrand Heading={"Hot Deals"} Data={arrDeals} />
      <div className=' bg-[#F6F7F8] mt-4 py-4'>
        <h1 className='font-medium text-lg pl-4' >PRICES</h1>
        <Range />
      </div>
      <div className='my-4 bg-[#F6F7F8] py-4'>
        <h1 className='font-medium text-xl pb-4 px-4'>color</h1>
        <div className='flex gap-4 w-full justify-center text-center' >
         
        {
          color.map((e, idx)=>(
             <p onClick={()=>handleColor(e)} style={{backgroundColor:e}} key={idx} className={`h-4 w-4 rounded-2xl     hover:outline-2 hover:outline-offset-2 outline-blue-200`} ></p>
          ))
        }
        </div>
      </div>
          <SideBarBrand Heading={"Brank"}  Data={[
          {
            name:"Nike",
            count:99
          },{
            name:"Nike",
            count:99
          },{
            name:"Adidas",
            count:99
          },{
            name:"Siemens",
            count:99
          }
        ]}  />

        <div className='w-56 shadow-sm p-[11px] mt-8 h-full' >
          <button className=' w-full bg-[#fffff] rounded-lg   text-black font-medium text-xl bg-grey-600 ' >More</button>
        </div>
    </div>
  )
}

export default Sidebar

