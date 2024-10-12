import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from "./ProductItem";
const RelatedProduct = ({category , subCategory}) => {

    const {products} = useContext(ShopContext);
    const[related,setRelated] = useState([]);

    useEffect(() =>{
        if(products.length>0){
            let productsCopy =products.slice();
            productsCopy = productsCopy.filter((item) => category === item.category );
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory );
            productsCopy = productsCopy.slice(0,5);
            setRelated(productsCopy);
        }
    },[products])
  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2'>
          <h1 className='mb-4 font-semibold'>RELATED PRODUCTS</h1>

        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                related.map((item,index) =>{
                    return(
                        <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
                    )
                })
            }
        </div>

      
    </div>
  )
}

export default RelatedProduct