import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import Newsletter from '../components/Newsletter'

const Contact = () => {
  return (
    <div>
    <div className='text-center text-2xl pt-10 border-1'> 
    <Title  text1={'CONTACT '} text2={'US'}/>
      
    </div>
    <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
      <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt=""></img>
      <div className='flex flex-col justify-center items-start gap-6'>
        <p className='font-semibold text-xl text-gray-700'>Our Store</p>
        <p className='text-gray-500'>Janta Nagar<br></br> Dhuri, Punjab</p>
        <p className='text-gray-500'>Tel: +91 94639879809 <br /> Email: goyal.diya0212@gmail.com</p>
        <p className='font-semibold text-xl text-gray-700'>Careers at LuxeLayer</p>
        <p className='text-gray-500'>Learn more about our teams and job openings.</p>
        <button className='bg-red-500 text-white px-4 py-2'>View Openings</button>
      </div>

    </div>

    <div className='mt-2'>
      <Newsletter />
    </div>
    </div>
  )
}

export default Contact
