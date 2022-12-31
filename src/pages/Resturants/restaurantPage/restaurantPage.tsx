import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { setRestaurants } from "../slicers/restaurantsSlicer";

export const RestaurantPage = () => {
  const restaurant = useSelector((state: any) => state.restaurant.value);
  const [dishes,setDishes]=useState([]);
  const url = "http://localhost:3001/api/dishes/getDishes";
  useEffect(() => {
    fetchData(url);
  }, []);
  
  const fetchData = (url:string) => {
      const response = fetch(url)
      .then((res) =>res.json())
      .then((data) => setDishes(data.filter((data:any)=> restaurant.dishes.includes(data._id))));
      return response;
  }
  
  return (
    <>
    {restaurant.name}
   </> 
  )
}
