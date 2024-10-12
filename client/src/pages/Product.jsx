import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import RelatedProduct from '../components/RelatedProduct';

const Product = () => {

  const {productId} = useParams();
  const {products,currency,addTocart} = useContext(ShopContext);

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

          <button onClick={()=> addTocart(productData._id,sizess)} className='bg-red-500 text-white px-8 py-3 text-sm active:bg-gray-100'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5'></hr>

          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product</p>
            <p>Cash on delivery is available</p>
            <p>Easy return within 7 days</p>
          </div>
        </div>


      </div>


      {/* desc and review */}
      <div className='mt-20'>
        <div className='flex'>
          
          <b className='border px-5 py-3 text-sm'>Reviews(122)</b>
        </div>

        <div className=''>
          <div className='flex gap-5 flex-row sm:flex-col mt-5'>
            <div className='flex flex-row sm:flex-col gap-3'>
              
              <p className='font-medium'>John Doe</p>
            </div>
            <div>
              <div className='flex items-center gap-1'>
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_dull_icon} alt="" className="w-3 5" />
              </div>
              <p className='mt-5 text-gray-500'>Really Nice Product </p>

              
            </div>
            <div className='flex flex-row sm:flex-col gap-3'>
              
              <p className='font-medium'>Diya Goyal</p>
            </div>
            <div>
              <div className='flex items-center gap-1'>
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_dull_icon} alt="" className="w-3 5" />
              </div>
              <p className='mt-5 text-gray-500'>Really Nice Product. Fitting super as well as fabric. great for wearing</p>

              
            </div>
            <div className='flex flex-row sm:flex-col gap-3'>
              
              <p className='font-medium'>Nite Roy</p>
            </div>
            <div>
              <div className='flex items-center gap-1'>
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_dull_icon} alt="" className="w-3 5" />
              </div>
              <p className='mt-5 text-gray-500'>Really Nice Product  , liked it , 100% trustworthy</p>

              
            </div>
           
            <p className='font-semibold '>more<span><img src={assets.dropdown_icon} className='rotate-270  w-3'  alt=" " /></span></p>
          </div> 

        </div>

      </div>

      {/* related products */}

      <RelatedProduct category={productData.category} subCategory={productData.subCategory} />

      
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
