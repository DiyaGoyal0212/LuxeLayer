import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateData, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0 && Object.keys(cartItems).length > 0) {
      const temp = [];
      for (const itemId in cartItems) {
        for (const size in cartItems[itemId]) {
          if (cartItems[itemId][size] > 0) {
            temp.push({
              _id: itemId,
              size: size,
              quantity: cartItems[itemId][size],
            });
          }
        }
      }
      setCartData(temp);
    }
  }, [cartItems, products]);

  const handleUpdateQuantity = (itemId, size, value) => {
    // Prevent updating if the value is zero or empty
    if (value === "" || value <= 0) return;
    updateData(itemId, size, Number(value));
  };

  const handleRemoveItem = (itemId, size) => {
    // Remove the item from cart
    updateData(itemId, size, 0);
  };

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <h1 className='font-semibold text-center'>YOUR CART</h1>
      </div>

      {/* Display cart items or an empty cart message */}
      {cartData.length === 0 ? (
        <p className="text-center text-lg text-gray-500">Your cart is empty</p>
      ) : (
        <div>
          {cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id);
            
            // Ensure productData is found
            if (!productData) {
              return null;  // Skip this item if product data is missing
            }

            return (
              <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6'>
                  <img src={productData.image[0]} className='w-16 sm:w-20' alt={productData.name} />
                  <div>
                    <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p className='text-xs sm:text-base'>{currency}{productData.price}</p>
                      <p className='text-xs sm:text-base'>Size: {item.size}</p>
                    </div>
                  </div>
                </div>
                
                {/* Quantity input */}
                <input
                  onChange={(e) => handleUpdateQuantity(item._id, item.size, e.target.value)}
                  className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                />

                {/* Remove item icon */}
                <img
                  src={assets.bin_icon}
                  onClick={() => handleRemoveItem(item._id, item.size)}
                  className='w-5 cursor-pointer'
                  alt="Remove item"
                />
              </div>
            );
          })}
        </div>
      )}

      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
          <div className='w-full text-end'>
            <button onClick={() => navigate('/place-order')} className='bg-red-600 text-white text-sm my-8 px-8 py-3'>
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
