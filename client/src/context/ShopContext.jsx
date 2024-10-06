import { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";
import { useState } from "react";

export const ShopContext = createContext();

const ShopContextProvider = (props) =>{

    const currency = '₹';
    const delivery_fee=10;
    const [ search, setSearch ] = useState('');
    const[shoeSearch,setShoeSearch] = useState(false);

    


    const value = {
        products, currency, delivery_fee,
        search,setSearch,shoeSearch,setShoeSearch

    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;