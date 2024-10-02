import React from 'react'
import Video from "../assets/video.mp4"

const HeroSection = () => {
  return (
    <div className='block sm:flex mx-auto justify-center items-center my-10'>
        
            <div className=' justify-center text-center mb-'>
            <h2 className='mx-auto text-3xl sm:text-6xl lg:text-6xl font-semibold' > <span className='text-[#C823ED]'>Empowering </span>  Tomorrow</h2> 
            <h4 className='mx-auto text-3xl sm:text-6xl lg:text-5xl font-light'> Shaping the Future
            Through Innovation</h4>
            </div>
            
    
        <div className='mx-auto'>
            <video autoPlay muted
            className=' mx-auto w-[65rem] h-[25rem] justify-center items-center mr-20'>
                <source  src={Video} type='video/mp4' />

            </video>
        

        </div>
      
    </div>
  )
}

export default HeroSection
