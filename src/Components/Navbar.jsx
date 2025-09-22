import React from "react";
import {   ShoppingCart } from "lucide-react";  
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
     
        <div className="flex items-center gap-2"> 
          <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center relative">
            <div className="w-3 h-3 bg-white rotate-45"></div>
          </div>
          <span className="font-bold text-lg">E-Comm</span>
        </div>
 
        <nav className="hidden md:flex items-center gap-6">
          <NavLink  to="/" className="text-sky-500 font-medium">HOME</NavLink>
          <NavLink  to="/" className="hover:text-sky-500 font-medium">BAG</NavLink>
          <NavLink  to="/" className="hover:text-sky-500 font-medium">SNEAKERS</NavLink>
          <NavLink  to="/" className="hover:text-sky-500 font-medium">BELT</NavLink>
          <NavLink  to="/" className="hover:text-sky-500 font-medium">CONTACT</NavLink>
        </nav>
 
        <div className="flex items-center gap-2">
          <ShoppingCart className="w-5 h-5" />
          <span className="text-sm">Items</span>
          <span className="text-sm text-gray-600">$0.00</span>
        </div>
      </div>
    </header>
  );
}
