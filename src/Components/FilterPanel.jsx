import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdApps } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";


const FilterPanel = ({sortProduct}) => {
  const [sortBy, setSortBy] = useState("Name");
  const [show, setShow] = useState(12);
  const [view, setView] = useState("grid");
 

  return (
    <>
    
    <div className="flex items-center justify-between w-[98%] bg-white shadow px-4 py-2  mr-4 mt-4">
   
      <div className="text-gray-600 font-medium">13 Items</div>
 
      <div className="flex items-center gap-4">
        
        <div className="flex items-center gap-2">
          <span className="text-gray-600">Sort By</span>
          <select
            value={sortBy}
            onChange={(e) => {sortProduct(e.target.value)
              setSortBy(e.target.value)}
            }
            className="border border-yellow-400 px-2 py-1 rounded focus:outline-none"
          >
            <option value="inc">Increase</option>
            <option value="dec">Decrease</option> 
          </select>
        </div>
 
        <div className="flex items-center gap-2">
          <span className="text-gray-600">Show</span>
          <select
            value={show}
            onChange={(e) => setShow(Number(e.target.value))}
            className="border px-2 py-1 rounded focus:outline-none"
          >
            <option value={6}>6</option>
            <option value={12}>12</option>
            <option value={24}>24</option>
          </select>
        </div>
      </div>
 
      <div className="flex items-center gap-4"> 
        
 
        <div className=" flex gap-2 items-center">
            <MdApps className="w-12 font-semibold text-4xl " />
            <RxHamburgerMenu className=" font-semibold text-2xl" />
        </div>
      </div>
    </div>
   
    </>
  );
};

export default FilterPanel; 