import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const {products,currency,cartItems,updateData,navigate} = useContext(ShopContext);
  const [ cartData,setCartData] = React.useState([]);
  useEffect(() =>{
    const temp = [];
    for(const items in cartItems){
      for(const size in cartItems[items]){
       if(cartItems[items][size]>0){
        temp.push({
          _id:items,
          size:size,
          quantity:cartItems[items][size],
        })
       }
      }
    }
    setCartData(temp);
  },[cartItems]);
  return (
    <div className='border-t pt-14'>
     <div className='text-2xl mb-3 '>
      <h1 className='font-semibold text-center'>YOUR CART</h1>

     </div>
     <div className=''>
      {cartData.map((item,index) =>{
        const productData= products.find((product)=> product._id===item._id);
        return (
          <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_05fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
            <div className='flex items-start gap-6'>
              <img src={productData.image[0]} className='w-16 sm:w-20' alt=""></img>
              <div className=''>
                <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                <div className='flex items-center gap-5 mt-2'>
                  <p className='text-xs sm:text-base'>{currency}{productData.price}</p>
                  <p className='text-xs sm:text-base'>Size: {item.size}</p>

                </div>

              </div>
            </div>
            <input onChange={(e) => e.target.value === "" || e.target.value==='0' ? null : updateData(item._id,item.size,Number(e.target.value))} className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1" type="number" min={1} defaultValue={item.quantity}></input>
            <img src={assets.bin_icon} onClick={() => updateData(item._id,item.size,0)} className='w-5 cursor-pointer' alt=""></img>
          </div>
        )
      })}
     </div>
     <div className='flex justify-end my-20'>
      <div className='w-full sm:w-[450px]'>
        <CartTotal />
        <div className='w-full text-end'>
          <button onClick={() => navigate('/place-order')} className='bg-red-600 text-white text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>
        </div>
      </div>
     </div>
      
    </div>
  )
}

export default Cart
