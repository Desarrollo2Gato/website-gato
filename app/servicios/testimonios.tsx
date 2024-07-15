import React from 'react'
import TestimoniosSlider from '../components/service/testimoniosSlider'

const Testimonios = () => {
  return (
    <div className='bg-gray-100 '>
      <div className='p-8 lg:p-16 max-w-[1920px] mx-auto xl:px-32'>
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
