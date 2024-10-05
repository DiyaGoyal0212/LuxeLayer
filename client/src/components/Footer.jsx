import React from 'react'
import {assets} from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
    <div className='flex flex-col items-start'>
        <img src={assets.logo} className='mb-2 w-32' alt="Company Logo" />
        <p className='w-full sm:w-2/3 text-gray-600'>
        LUXELAYER is a premium clothing brand dedicated to elevating everyday style with a blend of luxury and comfort. Our thoughtfully crafted collections combine modern aesthetics with high-quality fabrics, ensuring that you look and feel your best for any occasion. Discover versatile pieces designed to empower your individuality and inspire confidence.</p>
    </div>

    <div>
        <p className='text-xl font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
    </div>

    <div>
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Phone: <a href="tel:+91123456789">+91-123456789</a></li>
            <li>Email: <a href="mailto:goyal.diya0212@gmail.com">goyal.diya0212@gmail.com</a></li>
        </ul>
    </div>

    <div className='col-span-full'>
        <hr className='my-5' />
        <p className='py-5 text-sm text-center'>Copyright &copy; 2024 LuxeLayer - All Rights Reserved</p>
    </div>
</div>

  )
}

export default Footer
