import React from 'react'

const Newsletter = () => {
    const onSubmit = (event) =>{
        event.preventDefault();
        
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe Now</p>
        <p className='text-gray-500 text-sm'>Get latest updates and offers</p>
        <form id="form" onSubmit={onSubmit} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input id="news" className='w-full sm:flex-1 outline-none ' type='email'placeholder='Enter your email' required/>
            <button type="submit" className='bg-red-500 text-white px-10 py-4'>Subscribe</button>
        </form>
        </div>
  )
}

export default Newsletter
