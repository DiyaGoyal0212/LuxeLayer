import React, { useContext  } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const Bestseller = () => {

    const {products} = useContext(ShopContext);
    const [Bestseller,setBestseller] = React.useState([]);
    React.useEffect(() =>{
        const best = products.filter((item) =>(item.bestseller));
        setBestseller(best.slice(0,5));
    },[products]);
  return (
    <div className='my-10 '>
        <div className='text-center text-3xl py-8'>
            <Title text1={'Our '} text2={'Bestseller'} />
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
             {
                Bestseller.map((item,index) =>{
                    return(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    )
                })
             }

        </div>
      
    </div>
  )
}

export default Bestseller
