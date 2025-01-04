import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center my-20'>
        <div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'>
            <p>Text to image Generator</p>
            <img src={assets.star_icon} alt="" />
        </div>

        <h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'>Turn any text to <span className='text-blue-600'>image</span> in a matter of seconds</h1>
        <p className='text-center max-w-xl mx-auto mt-5'>Unleash your creativity with AI. Take your Imagination to a next level by generating images using imagify. </p>
        <button className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex  items-center gap-2 rounded-full '>Get Started <img className='h-6' src={assets.star_group}  /></button>


        <div className='flex gap-2 mt-10'>
            {
                Array(6).fill('').map((item,index)=>(
                    <img key={index} width={70} className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10' src={index % 2 ===0 ? assets.sample_img_2 : assets.sample_img_1 } alt="" />

                ))
            }
        </div>

        <p className='mt-2 text-neutral-500'>Generated images from Imagify</p>
    </div>
  )
}

export default Header