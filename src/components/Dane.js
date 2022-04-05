import { useEffect, useState } from "react";
import React from 'react'

const Dane = () => {
    const [dane , setDane] = useState([]);
    const fetchData= async()=>{
    const response = await axios.get("").catch(err => console.log(err));
        if(response){
        const dane = response.data;
        setDane(dane);
    }
}
useEffect(()=>{
  let timer1 = setTimeout(() => console.log("teraz"), 2 * 1000);
    fetchData();
    return () => {
      clearTimeout(timer1);
    };
},[])
  return (
    <div>Dane</div>
  )
}

export default Dane