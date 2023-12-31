import { useState,useEffect } from 'react'
const Header = ({
  setTheme
}) => {
  const colors = [
    'bg-red-300',
    'bg-yellow-300',
    'bg-green-300',
    'bg-blue-300',
    'bg-indigo-300',
    'bg-purple-300',
    'bg-pink-300',
    'bg-slate-300',
    'bg-gray-900',
  ];

  return (
    
    <header 
    className='
    flex justify-between items-center w-full h-20 p-15 bg-white-200 rounded-lg box-shadow-lg mb-5
    '>
       <section 
       className="flex items-center">

            {/* <img  
            src="https://i.ibb.co/0jZzQYH/Logo.png" 
            alt="Logo"
            className="rounded-full max-w-12"/> */}
            <span
            className="ml-3 cursor-pointer gradient-text text-3xl">BRO TASK</span> 
        </section>

        <section className="flex gap-2 mt-4">
          {
            colors.map((color)=>(
              <button 
              onClick={()=>setTheme(color)}
              key={color}
              className={`shadow-lg rounded-full border-2 border-gray-600 ${color} span-style`}></button>
            ))
          }
        </section>
    </header>
  )
}

export default Header