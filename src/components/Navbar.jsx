import React, { useState } from 'react';
import logo from '../assets/logo.png'
import menu from '../assets/menu.png'
import close from '../assets/close.png'
 


const Navbar = () => {

  const [toggle,setToggle]=useState(false)
  const handleClick =()=>setToggle(!toggle)

  return (
    <div className='w-full bg-white  pt-5  fixed z-10'>
    <div className='md:max-w-[1170px] max-w-[500px] m-auto w-full h-full flex justify-between items-center'>
        <img src={logo} className=' h-[49px]' />
        <div className=' hidden md:flex items-center'>
        <ul className='flex gap-4'>
            <li className='hover:underline underline-offset-8 decoration-[#ff6600] cursor-pointer'>Home</li>
            <li className='hover:underline underline-offset-8 decoration-[#ff6600] cursor-pointer'>About Us</li>
            <li className='hover:underline underline-offset-8 decoration-[#ff6600] cursor-pointer'>Our App</li>
            <li className='hover:underline underline-offset-8 decoration-[#ff6600] cursor-pointer'>Contacts</li>

        </ul>
    </div>
    <div className='hidden md:flex'>
        <button className='px-4'>Log in</button>
        <button className='bg-[#ff6600] hover:bg-[#ff6600af] px-8 py-2 rounded-md text-white font-bold'>Sign up</button>

    </div>

    <div className='md:hidden' onClick={handleClick}>
      <img src={toggle?close:menu} className='w-[20px] cursor-pointer'/>
    </div>

    </div>
    <div className={toggle?'absolute z-10 p-4 bg-white w-full px-10 md:hidden ':'hidden'}>
       <ul >
             <li className='p-4 hover:bg-gray-100' >Home</li>

            <li className='p-4 hover:bg-gray-100'>About Us</li>
            <li className='p-4 hover:bg-gray-100'>Our App</li>
            <li className='p-4 hover:bg-gray-100'>Contacts</li>

            <div className=' flex flex-col my-4 gap-4 '>
                <button className='p-2 border border-[#ff6600] bg-transparent'>Log in</button>
                <button className='bg-[#ff6600] px-8 py-2 rounded-md text-white font-bold'>Sign up</button>


            </div>

        </ul>
    </div>
    
    
    </div>
  )
}

export default Navbar