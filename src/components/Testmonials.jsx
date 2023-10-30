import React from 'react'
import Userpic1 from '../assets/Userpic.png'
import Userpic2 from '../assets/Userpic (1).png'
import Userpic3 from '../assets/Userpic (2).png'
import Userpic4 from '../assets/Userpic (3).png'


const Testmonials = () => {
  return (
   
    <div className='w-full bg-white '>
        <div className='md:max-w-[1170px] max-w-[500px]  m-auto text-center my-28'>
            <p className='font-thin text-[#808084] tracking-[8px]'>TESTMONIALS</p>
            <h1 className='text-[#0B1B35] font-sans font-bold text-4xl'>What Clients say about us</h1>
        </div>
        <div className='md:max-w-[900px] max-w-[500px]  m-auto grid md:grid-cols-2 gap-20'>
            <div className='grid grid-cols-4 hover:shadow-2xl hover:rounded-lg p-2' >
                <div >
                    <img src={Userpic1} />
                </div>
                <div className='col-span-3 space-y-5 ' >
                    <p className='font-semibold leading-8  '>Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support</p>
                    <p className='font-thin text-[#3c3b3f]'>Rayhan Curran</p>
                </div>
                
                
                
            </div>
            <div className='grid grid-cols-4 hover:shadow-2xl hover:rounded-lg p-2'>
                <div >
                    <img src={Userpic2}/>
                </div>
                <div className='col-span-3 space-y-5'>
                    <p className='font-semibold leading-8'>As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website</p>
                    <p className='font-thin text-[#8A898E]'>Kayley Frame</p>
                </div>
                
            </div>
            <div className='grid grid-cols-4 hover:shadow-2xl hover:rounded-lg p-2'>
                <div >
                    <img src={Userpic3} />

                </div>
                <div className='col-span-3 space-y-5'>
                    <p className='font-semibold leading-8'>The most important part of the Startup Framework is the samples</p>
                    <p className='font-thin text-[#8A898E]'>Gene Whitfield</p>
                </div>
                
            </div>
            <div className='grid grid-cols-4 hover:shadow-2xl hover:rounded-lg p-2'>
                <div>
                    <img src={Userpic4}/>
                </div>
                <div className='col-span-3 space-y-5'>
                    <p className='font-semibold leading-8'>I’ve built my website with Startup just in one day, and it was ready-to-go. </p>
                    <p className='font-thin text-[#8A898E]'>Allan Kim</p>
                </div>

                
                
            </div>
        </div>

    </div>
  )
}

export default Testmonials