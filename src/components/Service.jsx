import React from 'react'
import Activity from '../assets/Activity.png'
import Chart from '../assets/Chart.png'
import Video from '../assets/Video.png'


const Service = () => {
  return (
    <div className='w-full bg-white '>
        <div className='md:max-w-[1170px] max-w-[500px]  m-auto text-center'>
            <p className='font-thin text-[#8A898E] tracking-[8px]'>SERVICE</p>
            <h1 className='text-[#0B1B35] font-sans font-bold text-4xl'>Our Vison & Our Goal</h1>

        </div>
        <div className='md:max-w-[1170px] max-w-[500px] m-auto grid md:grid-cols-3 gap-20 py-16 '>
            <div className=' py-10 text-center px-8 rounded-[20px] shadow-2xl'>
                <img src={Activity} className='m-auto h-[60px] hover:-translate-y-6 '/>
                <h3 className='text-2xl font-semibold py-6'>Graphic Design</h3>
                <p className='text-justify'>
                Companies use the visual concepts of graphic design to promote 
                and sell products through advertising, to convey complicated 
                information in an easy-to-understand format (think of infographics), 
                to develop a brand identity, and so much more</p>
                <button className='bg-[#ff6600] hover:bg-[#ff6600af] px-6 py-2 m-8 rounded-md text-white font-thin'>Learn More</button>
            </div>
            <div  className=' py-10 text-center px-8 rounded-[20px] shadow-2xl '>
                <img src={Video} className='m-auto h-[60px] hover:-translate-y-6  '/>
                <h3 className='text-2xl font-semibold py-6'>Video Editing</h3>
                <p className='text-justify'>Video Editors will cut together film clips, alter and correct sound mixing, add digital effects, and make other essential technical changes to video files.Video editing is the art of manipulating and combining video files .</p>
                <button className='bg-[#ff6600] hover:bg-[#ff6600af] px-6 py-2 m-8 rounded-md text-white font-thin'>Learn More</button>


            </div>
            <div  className=' py-10 text-center px-14 rounded-[20px] shadow-2xl'>
                <img src={Chart} className='m-auto h-[60px] hover:-translate-y-6 '/>
                <h3 className='text-2xl font-semibold py-6'>Digital Marketing</h3>
                <p className='text-justify'>Digital marketing has become the go-to marketing strategy for small businesses and enterprises alike  strategies for businesses use of digital channels to market products and services to consumers. </p>
                <button className='bg-[#ff6600] hover:bg-[#ff6600af] px-6 py-2 m-8 font-thin  rounded-md text-white '>Learn More</button>


            </div>
        </div>

    </div>
  )
}

export default Service