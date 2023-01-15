import React from 'react'
import { useSelector } from 'react-redux';
import { Topic } from '../Slider/SliderStyle'
import { CardContainer, CartContainer,DishName,DishPrice,Image, Info, Price, Side } from './CartStyle'

export const Cart = () => {
  const orderDetails = useSelector((state: any) => state.orderDetails.value);
  const total=()=>{
    let sum=0;
    orderDetails.map((amount: { quantity: number; price: number; })=>
    {sum+=amount.quantity*amount.price}); 
    return sum;}
  
  return (
    
    <CartContainer>
        <Topic>My order</Topic>
        {orderDetails && orderDetails.map((order: any,index:number) =>
            <CardContainer key={index}>
                <Image src={require(`../../${order.dishImage}`)}  title={order.dishName} />
                <Info>
                  <DishName>{order.quantity}x {order.dishName}</DishName>
                  <Side>{order.side}{order.changes.length>0?`|${order.changes}`:''}</Side>
                  <Price>
                    <DishPrice>₪{order.price}</DishPrice>
                  </Price>
                </Info>
            </CardContainer>
          )}
          <div>TOTAL - ₪{total()}</div>
    </CartContainer>
  )
}
