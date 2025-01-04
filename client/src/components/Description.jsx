import React from 'react'
import { assets } from '../assets/assets'

const Description = () => {
  return (
    <div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
        <p className='text-gray-500 mb-8 '>Turn Imagination To Reality</p>

        <div className='flex flex-col gap-5 md:ga-14 md:flex-row items-center '>
            <img className='w-80 xl-w-96 rounded-lg ' src={assets.sample_img_1} alt="" />
            <div>
                <h2 className='text-3xl font-medium mx-w-lg mb-4'>Introducing the AI-Powered Text to Image Genetor</h2>
                <p className='text-gray-600 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nesciunt debitis laboriosam neque quo officia porro beatae excepturi, est odit a eum rem rerum, possimus, architecto ducimus cupiditate nemo quos!</p>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed necessitatibus commodi modi repellendus, et assumenda praesentium iste dignissimos expedita quae fugiat illum magnam animi? Perferendis quidem quae facilis corporis consectetur.</p>
            </div>
        </div>
    </div>
  )
}

export default Description