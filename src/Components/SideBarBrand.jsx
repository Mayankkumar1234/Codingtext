import React, { useState } from 'react'

const SideBarBrand = ({Heading , Data}) => {

  const [selected , setSelected] = useState()
  return (
    <div className="w-56 bg-[#F6F7F8] mt-4     p-4 pb-6">
      <h2 className="text-lg font-bold mb-3 tracking-wide">{Heading}</h2>
      <ul className="space-y-7 ">
        {Data?.map((brand, idx) => (
          <li
            key={idx}
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setSelected(idx)}
          >
            <span
              className={`text-sm  font-semibold ${selected === idx ? "text-blue-500" : "text-gray-700"}`}
            >
              {brand.name}
            </span>
            <span
              className={`text-sm font-normal ${selected === idx ? "text-blue-400" : "text-gray-400"}`}
            >
              {brand.count}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBarBrand
