import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const CartTotal = () => {
    const {getCartamount,cartItems,delivery_fee,currency} = useContext(ShopContext);
  return (
    <div className='w-full'>
        <div className='text-2xl'>
            <h1 className=' font-semibold text-center' >CART TOTAL</h1>

        </div>
        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between '>
                <p className='font-semibold'>Subtotal</p>
                <p>{currency} {getCartamount()}</p>
            </div>
            <hr></hr>
            <div className='flex justify-between'>
                <p>Shipping Fee</p>
                <p>{currency} {delivery_fee}</p>
            </div>
            <hr />

            <div className='flex justify-between'>
                <b>Total</b>
                <b>{currency} {getCartamount() === 0? 0: getCartamount()+delivery_fee}</b>
            </div>
            
        </div>
      
    </div>
  )
}

export default CartTotal
