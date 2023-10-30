import React from 'react'
import Photo from '../assets/Photo.png'
import right from '../assets/right-arrow.png'
import scribble from '../assets/swirly-scribbled-arrow.png'

const Exploree = () => {
  return (
    <div className='w-full bg-white mt-24'>
        <div className='md:max-w-[1170px] max-w-400px grid md:grid-cols-3 m-auto md:gap-36 '>
            <div >
                <h1 className='font-semibold text-3xl leading-snug text-[#1E0E62]'>Many Blocks and Components</h1>
                <p className=' text-[#151439a0] pt-6   '>Startup Framework contains components and complex blocks which can easily be integrated into almost any design. </p>
                <button className='border-2  rounded-full md:px-8 m-auto p-3 mt-16 w-full justify-center  text-[#1E0E62] flex  hover:bg-[#ff6600] gap-2'>Explore
                  <img src={scribble} className='h-[20px] w-[30px]  ' />
                </button>
            </div>
            <div className='col-span-2 md:order-last order-first'>
            <img src={Photo}/>

            </div>
        </div>
    </div>
  )
}

export default Exploree