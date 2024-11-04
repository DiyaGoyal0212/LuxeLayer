import { createContext, useEffect } from "react";
import {backendUrl} from "../App.jsx"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from 'axios';


export const ShopContext = createContext();

const ShopContextProvider = (props) =>{

    const currency = '₹';
    // const backendUrl = import.meta.env.VITE_BACKEND_URL; 
    const delivery_fee=10;
    const [search, setSearch ] = useState('');
    const[shoeSearch,setShoeSearch] = useState(false);
    const[cartItems,setCartItems] = useState({});
    const navigate = useNavigate();
    const [products,setProducts] = useState([]);

    
     const addTocart = async (itemId,size) =>{
        if(!size) {
            toast.error('Please select a size');
            return;
        }
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] = cartData[itemId][size]+1;
            }else{
                cartData[itemId][size] = 1;
            }
        }
        else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);


     }

  const getCartcount = () =>{
        let count = 0;
        for(const item in cartItems){
            for(const size in cartItems[item]){
                try{
                    if(cartItems[item][size]>0){
                        count+=cartItems[item][size];
                    }
            
                }catch(err){

                }
            }
        }
        return count;
     
  }

  const updateData = async (itemId,size,quantity) =>{
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);

  }

  const getCartamount =  ()=> {
        let amount = 0;
        for(const item in cartItems){
            const product = products.find((product) => product._id === item);
            for(const size in cartItems[item]){
                try{
                    if(cartItems[item][size]>0){
                        amount+= product.price*cartItems[item][size];
                    }
                }catch(err){

                }
            }
        }
        return amount;
  }

  const getProducts = async () =>{
    try {
        const response = await axios.get(backendUrl + "/api/product/list");
        console.log("Full response:", response);
        console.log("Response data:", response.data);
        console.log("Backend Url", backendUrl)
        if(response.data.success){
            setProducts(response.data.products);
        }else{
            toast.error(response.data.message);
        }
       
        
    } catch (error) {
        toast.error(error.message);
        
    }
  }

  useEffect(() =>{
    getProducts()
  },[]);

  
    const value = {
        products, currency, delivery_fee,
        search,setSearch,shoeSearch,setShoeSearch,
        cartItems,addTocart,
        getCartcount,updateData,getCartamount,navigate,backendUrl

    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;