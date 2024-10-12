import React, { useState } from 'react'

const Login = () => {

  const [current,setCurrent] = useState('Sign Up');
  const onSubmit = async (e) =>{
    e.preventDefault();

  }
  return (
   <form onSubmit={onSubmit} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-600'>
    <div className='inline-flex items-center gap-2 mb-2 mt-10'>
      <p className='prata-regular text-3xl '>{current}</p>
      <hr className='border-none h-[1.5px] w-8 bg-gray-800'></hr>
    </div>
    {current === 'Login' ? '' : <input  type='text' className='w-full px-3py-2 border border-gray-800' placeholder='Name' required/>}
    <input  type='email' className='w-full px-3py-2 border border-gray-800' placeholder='Email' required/>
    <input  type='password' className='w-full px-3py-2 border border-gray-800' placeholder='password' required/>
    <div className='w-full flex justify-between text-sm mt-[-8px]'>
      
      {
        current === 'Login' ?<p className='cursor-pointer'>Forgot Password ?</p> : ''
        
      }
      {
        current === 'Login' ?<p onClick={()=> setCurrent("Sign Up")} className='cursor-pointer'>Create Account</p> : <p className='cursor-pointer' onClick={() => setCurrent("Login")}> Login Here</p>
      }
    </div>
    <button className='bg-red-500  text-white px-10 py-2'>{current === 'Login' ? 'Sign In' : 'Sign Up'}</button>

   </form>
  )
}

export default Login
