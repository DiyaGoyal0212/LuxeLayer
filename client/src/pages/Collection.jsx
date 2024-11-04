import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const {products,search,shoeSearch} = useContext(ShopContext);
  const [showFilter,setShowFilter] = React.useState(false);
  const [filteredProducts,setFilteredProducts] = React.useState([]);
  const [Category,setCategory] = React.useState([]);
  const [Type,setType] = React.useState([]);
  const [sort,setSort] = React.useState('relavent');

  const toggleCategory = (e) =>{
    if(Category.includes(e.target.value)){
      setCategory(Category.filter((item) => item !== e.target.value));
    }
    else{
      setCategory([...Category,e.target.value]);
    }
  }

  const toggleType = (e) =>{
    if(Type.includes(e.target.value)){
      setType(Type.filter((item) => item !== e.target.value));
    }
    else{
      setType([...Type,e.target.value]);
    }
  }

  const applyFilter = () =>{
    let productsCopy = products.slice();

     if(shoeSearch&& search){
      productsCopy = productsCopy.filter((item ) => item.name.toLowerCase().includes(search.toLowerCase()));

     }
    if(Category.length > 0){
      productsCopy = productsCopy.filter((item) => Category.includes(item.category));
    }

    setFilteredProducts(productsCopy);

   if (Type.length > 0) {
    productsCopy = productsCopy.filter((item) => Type.includes(item.subCategory));
}
  setFilteredProducts(productsCopy) // Assuming you want to update a state variable called products


}


const sortProduct = (e) =>{
  let filteredProductsCopy = filteredProducts.slice();
 switch(sort){
    case 'low-high':
     setFilteredProducts(filteredProductsCopy.sort((a,b) => a.price - b.price));
      break;
    case 'high-low':
      setFilteredProducts(filteredProductsCopy.sort((a,b) => b.price - a.price));
      break;
    default:
      applyFilter();
      break;

 }
 
}


  useEffect(() =>{
    applyFilter();
  },[Category,Type,search,shoeSearch,products]);

  useEffect(() =>{
    sortProduct();
  },[sort]);

  
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 py-10 border-1'>
      <div className='min-w-60'>
        <p onClick={() =>setShowFilter(!showFilter)} className='my-2 text-xl font-semibold flex items-center cursor-pointer gap-2'>FILTERS</p>
        <img src={assets.dropdown_icon}  className={`h-3 sm:hidden ${showFilter?'rotate-90':''}`} alt=""></img>



        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' id='input' type='checkbox' value={'Men'} onChange={toggleCategory}/>Men
              
            </p>
            <p className='flex gap-2'>
              <input className='w-3' id='input' type='checkbox' value={'Women'} onChange={toggleCategory}/>Women
              
            </p>
            <p className='flex gap-2'>
              <input className='w-3' id='input' type='checkbox' value={'Kids'} onChange={toggleCategory} />Kids
              
            </p>
          </div>
        </div>



        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' id='input' type='checkbox' value={'Topwear'} onChange={toggleType}/>Topwear
              
            </p>
            <p className='flex gap-2'>
              <input className='w-3' id='input' type='checkbox' value={'Bottomwear'} onChange={toggleType}/>Bottomwear
              
            </p>
            <p className='flex gap-2'>
              <input className='w-3' id='input' type='checkbox' value={'Winterwear'} onChange={toggleType}/>Winterwear
              
            </p>
          </div>
        </div>



      </div>


      {/* RIGHT SIDE */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL '} text2={'Collection'} />

          {/* product sort */}
          <select id='input' onChange={(e) =>setSort(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option id='input' value="relavent">Sort by Relavent</option>
            <option id='input' value="low-high">Low to High</option>
            <option id='input' value="hgh-low">High to Low</option>
          </select>
        </div>


        {/* map products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filteredProducts.map((item,index) =>{
              return(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
              )
            })
            
          }
        </div>

      </div>
      
    </div>
  )
}

export default Collection
