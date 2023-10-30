import React from 'react'
import Group from '../assets/Group.png'

const Newsleter = () => {
  return (
    <div className='w-full bg-white mb-12'>
        <div className='md:max-w-[1170px] max-w-[500px]  m-auto text-center my-28'>
            <h1 className='text-[#0B1B35] font-sans font-bold text-4xl'>Subscribe Our Newsleter</h1>
        </div>
        <div className='md:max-w-[1170px] max-w-[500px]  m-auto md:grid md:grid-cols-3 gap-2'>
            
            <div>
                <img src={Group} className='w-[60%] m-auto' />
            </div>
            <div className='space-y-12 col-span-2 '>
            <p className='text-[#8b8585]'>Subscribe Now for holiday deals, inspiration and the latest tips straight to your inbox receive news and promotions by email you can unsubscribe whenever you wantit is totally free</p>
            <form className='border  p-4 shadow-xl rounded-full'>
                <input className='bg-white outline-none px-12'
                placeholder='Enter your E-mail here...'
                type='text'/>
            </form>
            <button className='bg-[#ff6600] hover:bg-[#ff6600af] py-3 text-white  rounded-md  font-bold w-full'>Subscribe Our Newsleter</button>

            </div>
            
            
        </div>
        <div className='md:max-w-[1170px] max-w-[500px] m-auto border-b-2 border-[#bebaba] mt-12 '>
                
        </div>
       
    </div>
  )
}

export default Newsleter