import React, { useState } from "react";

const MIN = 10.00;
const MAX = 26.00;

export default function Range() {
  const [minVal, setMinVal] = useState(13.99);
  const [maxVal, setMaxVal] = useState(25.99);

  const minPercent = ((minVal - MIN) / (MAX - MIN)) * 100;
  const maxPercent = ((maxVal - MIN) / (MAX - MIN)) * 100; 

  return (
    <div className="w-full max-w-md mx-auto px-4 py-4 flex flex-col gap-6 pt-6 pb-8"> 
    
        <div className="flex justify-around">
           <p className="pb-4 font-medium">Range:</p>
           <span>${minVal}-${maxVal}</span>
        </div>
      <div className="relative h-2 bg-gray-200 rounded-full">
        <div
          className="absolute h-2 bg-blue-500 rounded-full"
          style={{
            left: `${minPercent}%`,
            width: `${maxPercent - minPercent}%`,
          }}
        />
        {/* Min Thumb */}
        <input
          type="range"
          min={MIN}
          max={MAX}
          step="0.1"
          value={minVal}
          onChange={(e) => {
            const value = Math.min(Number(e.target.value), maxVal - 1);
            setMinVal(value); 
          }}
          className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none
                     [&::-webkit-slider-thumb]:appearance-none
                     [&::-webkit-slider-thumb]:pointer-events-auto
                     [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4
                     [&::-webkit-slider-thumb]:rounded-full
                     [&::-webkit-slider-thumb]:bg-blue-500
                     [&::-webkit-slider-thumb]:cursor-pointer
                     [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4
                     [&::-moz-range-thumb]:rounded-full
                     [&::-moz-range-thumb]:bg-blue-500
                     [&::-moz-range-thumb]:cursor-pointer"
          style={{ zIndex: minVal > MAX - 100 ? "5" : undefined }}
        />
        {/* Max Thumb */}
        <input
          type="range"
          min={MIN}
          max={MAX}
          value={maxVal}
           step="0.1"
          onChange={(e) => {
            const value = Math.max(Number(e.target.value), minVal + 1);
            setMaxVal(value); 
          }}
          className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none
                     [&::-webkit-slider-thumb]:appearance-none
                     [&::-webkit-slider-thumb]:pointer-events-auto
                     [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4
                     [&::-webkit-slider-thumb]:rounded-full
                     [&::-webkit-slider-thumb]:bg-blue-500
                     [&::-webkit-slider-thumb]:cursor-pointer
                     [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4
                     [&::-moz-range-thumb]:rounded-full
                     [&::-moz-range-thumb]:bg-blue-500
                     [&::-moz-range-thumb]:cursor-pointer"
        />
      </div>
      
    </div>
  );
}
