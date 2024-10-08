import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';

const Product = () => {

  const {productId} = useParams();
  const {products,currency} = useContext(ShopContext);

  const [ productData, setProductData ] = React.useState(false);
  const [ image,setImage] = useState('');
  const [ sizess,setSize] = useState('');

  const fetchData = async() =>{
    products.map((product) =>{
      if(product._id === productId){
        setProductData(product);
        setImage(product.image[0]);
        return null;
      }
    })
  }

  useEffect(() =>{
    fetchData();
  },[productId]);

   
  return  productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* product images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((image,index) =>{
                return(
                  <img onClick={() => setImage(image)} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' src={image} alt="product" />
                )
              })
            }
          </div>

          <div className='w-full sm:w-[80%]'>
            <img src={image}  className='w-full h-auto'/>
          </div>

        </div>

        {/* product info */}

        <div className='flex-1 '>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((size,index) =>{
                return(
                  <button key={index} onClick={() => setSize(size)} className={`border border-gray-300 px-3 py-1 ${size===sizess ? 'border-orange-600' : ''}`}>{size}</button>
                )
              })}
            </div>
          </div>

          <button className='bg-red-500 text-white px-8 py-3 text-sm active:bg-gray-100'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5'></hr>

          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product</p>
            <p>Cash on delivery is available</p>
            <p>Easy return within 7 days</p>
          </div>
        </div>


      </div>


      {/*  */}
      
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
