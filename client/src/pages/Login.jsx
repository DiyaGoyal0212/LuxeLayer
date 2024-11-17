import React, { useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { backendUrl } from '../App';
import axios from 'axios';
import { useContext } from 'react';
import { toast } from 'react-toastify';

const Login = () => {

  const [current,setCurrent] = useState('Login');

  const { token,setToken,navigate } = useContext(ShopContext);
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const onSubmit = async (e) =>{
    e.preventDefault();
    try {
      if(current === 'Sign Up'){
        const response = await axios.post(backendUrl+'/api/user/register',{name,email,password});
         if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem('token',response.data.token);
          
         }
          else{
            toast.error(response.data.message);
          }

      }
      else{

        const response = await axios.post(backendUrl+'/api/user/login',{email,password});
        if(response.data.success){
          setToken(response.data.token);
          localStorage.setItem('token',response.data.token);
          
        }
        else{
          toast.error(response.data.message);
        }
        
      }

      
    } catch (error) {
      toast.error(error.message);
      
    }

  }

  useEffect(() =>{
    if(token){
      navigate('/');
    }

  },[token])

  useEffect(() =>{
    if(!token && localStorage.getItem('token')){
      setToken(localStorage.getItem('token'));
    }

  },[]);
  return (
   <form onSubmit={onSubmit} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-600'>
    <div className='inline-flex items-center gap-2 mb-2 mt-10'>
      <p className='prata-regular text-3xl '>{current}</p>
      <hr className='border-none h-[1.5px] w-8 bg-gray-800'></hr>
    </div>
    {current === 'Login' ? '' : <input onChange={(e) => setName(e.target.value)} value={name} type='text' className='w-full px-3py-2 border border-gray-800' placeholder='Name' required/>}
    <input  id="email"  type='email' onChange={(e) => setEmail(e.target.value)} value={email} className='w-full px-3py-2 border border-gray-800' placeholder='Email' required/>
    <input id='pass' type='password' onChange={(e) => setPassword(e.target.value)} value={password} className='w-full px-3py-2 border border-gray-800' placeholder='password' required/>
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
