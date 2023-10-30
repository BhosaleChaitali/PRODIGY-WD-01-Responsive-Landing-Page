import React from 'react'
import learnMore from '../assets/learnMore.png'
import rem from '../assets/rem.png'


const section1 = () => {
  return (
    <div className=' w-full bg-white py-36'>
      <div className='md:max-w-[1170px] max-w-[300px] m-auto grid md:grid-cols-2'>
          <div>
              <h1 className=' md:text-7xl text-5xl  text-[#0B1B35] font-sans font-bold'>We boost growth for your startup business </h1>
              <p className=' text-[#000000] font-sans font-semibold text-xl py-8 '>Our goal is top at the heart of creativity services industry as a digital creator. In has a after comment</p>
              <div className='md:flex justify-between  gap-8 space-y-2'>
                <button className='bg-[#ff6600] hover:bg-[#ff6600af]  w-full rounded-md  text-white font-bold'>Get Started</button>
                <button className='flex justify-center items-center text-md  w-full font-semibold bg-transparent gap-2 hover:shadow-lg p-1 rounded-md '>
                  <img src={learnMore} />
                
                  Learn More
                </button>

              </div>
          </div>
          <img  src={rem} className='md:order-last order-first hover:animate-pulse'/>
      </div>
    

    </div>
  )
}

export default section1