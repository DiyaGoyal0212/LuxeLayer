import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext';
import {assets} from "../assets/frontend_assets/assets";
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const {search,setSearch,shoeSearch,setShoeSearch} = useContext(ShopContext);
    const [ visible,setVisible] = React.useState(false);
    const location = useLocation();
    useEffect(() =>{
        if(location.pathname.includes('collection')  ){
            setVisible(true);
        }
        else{
            setVisible(false);
        }
        
    },[location])
  return  shoeSearch && visible ?(
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className='flex-1 outline-none bg-inherit text-sm' placeholder='"seacrh' />
        <img src={assets.search_icon} className='w-4' alt='' />
        </div>

        <img onClick={() =>setShoeSearch(false)} src={assets.cross_icon} className='inline w-3 cursor-pointer' alt='' />
      
    </div>
  ):null
}

export default SearchBar