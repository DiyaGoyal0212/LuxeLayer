import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { backendUrl } from '../App';
const List = () => {

  const [list,setList] = useState([]);
  const fetchlist = async () =>{
    try {
      const response= await axios.get(backendUrl + "/api/product/list");
      
      if(response.data.success){
        setList(response.data.products);
      }
    } catch (error) {
      
    }

  }
  useEffect(() =>{
    fetchlist();
  },[list])
  return (
    <div>
      
    </div>
  )
}

export default List
