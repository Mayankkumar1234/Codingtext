import React, { useState } from 'react'
import MainComponent from "./Components/index.jsx" 
import { Route, Router, Routes } from 'react-router-dom';


const App = () => {

 


  return (
    <>
     <div className='w-full h-full' >
       
    </div>
    <Routes>
      <Route path="/" element={<MainComponent />} />
    </Routes>
     
    </>

  )
}

export default App
