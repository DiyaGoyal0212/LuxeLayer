import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import Newsletter from '../components/Newsletter'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT '} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16 '>
        <img  className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
        <div className='flex flex-col juatify-center gap-6 md:w=2/4 text-gray-600'>
        <p>

Welcome to LuxeLayer, where style meets sophistication! Founded with a passion for fashion, we believe that every piece of clothing should be a reflection of your unique personality and lifestyle.

At LuxeLayer, we curate a diverse collection of high-quality garments that blend timeless elegance with contemporary trends. Our mission is to empower you to express yourself through fashion, whether you're dressing for a casual day out, a special occasion, or anything in between.
<hr className='mt-5 w-1/2 items-center'></hr>
<span className='font-semibold text-2xl '>Our Vision</span> 
<hr className='mb-5 w-1/2 items-center'></hr>

We envision a world where everyone feels confident and beautiful in what they wear. Our handpicked selections are designed to make you feel luxurious, without compromising on comfort or affordability. From chic dresses and tailored suits to everyday essentials, LuxeLayer offers something for every wardrobe.


<hr className='mt-5 w-1/2 items-center'></hr>
<span className='font-semibold text-2xl '>Quality & Sustainability</span> 
<hr className='mb-5 w-1/2 items-center'></hr>

We prioritize quality and sustainability in every aspect of our business. Our carefully sourced materials and ethical manufacturing processes ensure that you can shop with confidence, knowing that your choices are making a positive impact on the planet.


<hr className='mt-5 w-1/2 items-center'></hr>
<span className='font-semibold text-2xl '>Join Our Community</span> 
<hr className='mb-5 w-1/2 items-center'></hr>

At LuxeLayer, we believe that fashion is about more than just clothing—it's about connection. Join our growing community of style enthusiasts and stay inspired with our latest collections, fashion tips, and exclusive offers. 

Thank you for choosing LuxeLayer. We’re excited to be part of your style journey!</p>
        
        </div>
      </div>

      <div className='mt-8'>
      <Newsletter />
      </div>
      
    </div>
  )
}

export default About
