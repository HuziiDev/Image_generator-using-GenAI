import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
    <div className='flex flex-col items-center justify-center my-20 py-12'>
     <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Customer Testimonials</h1>
     <p className='text-gray-500 mb-12 '>What Our Users Say</p>

     <div className='flex flex-wrap gap-6'>
        {testimonialsData.map((Testimonial, index)=>(
            <div className='bg-white/20 p-12 rounded-lg shadow-md border w-80 cursor-pointer m-auto hover:scale-[1.02] transition-all' key={index}>
            <div className='flex flex-col items-center'>
                <img className='rounded-full w-14' src={ Testimonial.image} alt="" />
                <h2 className='text-xl font-semibold mt-3'>{Testimonial.name}</h2>
                <p className='text-gray-500 mb-4'>{Testimonial.role}</p>
                <div className='flex mb-4'>
                    {
                        Array(Testimonial.stars).fill().map((item,index)=>(
                <img src={assets.rating_star} key={index}/>
                        ))
                    }
                </div>
                <p className='text-center text-sm text-gray-600'>{Testimonial.text}</p>
            </div>

            </div>
        ))}
     </div>

    </div>
  )
}

export default Testimonials