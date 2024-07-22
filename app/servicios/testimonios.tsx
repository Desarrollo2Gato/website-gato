import React from 'react'
import TestimoniosSlider from '../components/service/testimoniosSlider'

const Testimonios = () => {
  return (
    <div className='bg-gray-100 '>
      <div className='max-w-[1440px] mx-auto sm:px-12 lg:px-16 px-8 py-16'>
      <h2
          className="text-3xl text-center
         text-[#3D3D3D] font-medium uppercase mb-8"
        >
          Testimonios
        </h2>
        <TestimoniosSlider/>
      </div>
      

    </div>
  )
}

export default Testimonios
