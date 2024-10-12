import React, { useContext } from 'react'
import { assets } from "../assets/frontend_assets/assets"
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [visible,setVisible] = React.useState(false);
    const {setShoeSearch,getCartcount}  = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between py-2 font-medium">
        <img src={assets.logo} className='w-36  mt-0 py-0' alt="" />
        <ul className='hidden sm:flex gap-7 text-sm text-gray-700 '>
            <NavLink to="/" className="flex flex-col items-center gap-1">
                <p>Home</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to="/collection" className="flex flex-col items-center gap-1">
                <p>Collection</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to="/about" className="flex flex-col items-center gap-1">
                <p>About</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to="/contact" className="flex flex-col items-center gap-1">
                <p>Contact</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
        </ul>

        <div className='flex items-center gap-6'>
            <img onClick={() => setShoeSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
            <div className='group relative'>
            <Link to='/login'> <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" /></Link>
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 p-4 bg-white text-gray-600 rounded-lg shadow-lg'>
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p className='cursor-pointer hover:text-black'>Orders</p>
                        <p className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>
            </div>

            <Link to='/cart' className='relative'>
            <img src={assets.cart_icon} className='w-5 cursor-pointer' alt="" />
            <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartcount()}</p>

            </Link>
            <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden ' alt="" />
        </div>
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col  text-sm text-gray-700 '>
                <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                    <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
                    <p>Back</p>
                </div>
                <NavLink onClick={() => setVisible(false)} to="/" className="py-2 pl-6 border">
                    <p>Home</p>
                    
                </NavLink>
                <NavLink onClick={() => setVisible(false)} to="/collection" className="py-2 pl-6 border">
                    <p>Collection</p>
                    
                </NavLink>
                <NavLink onClick={() => setVisible(false)} to="/about" className="py-2 pl-6 border">
                    <p>About</p>
                    
                </NavLink>
                <NavLink onClick={() => setVisible(false)} to="/contact" className="py-2 pl-6 border">
                    <p>Contact</p>
                    
                </NavLink>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
