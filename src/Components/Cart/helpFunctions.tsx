import { useSelector } from "react-redux";

  export const total=(orderDetails: { quantity: number; price: number; }[])=>{
    let sum=0;
    orderDetails.map((amount: { quantity: number; price: number; })=>
    {sum+=amount.quantity*amount.price}); 
    return sum;}
  
    export const quantitySum=(orderDetails: { quantity: number; }[])=>{
      let sum=0;
      orderDetails.map((amount: { quantity: number;})=>
      {sum+=amount.quantity}); 
      return sum;}