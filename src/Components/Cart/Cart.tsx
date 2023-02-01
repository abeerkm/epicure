import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { openCart } from '../../Functions/functions';
import { setCart } from '../../pages/Resturants/slicers/cart';
import { Topic } from '../Slider/SliderStyle'
import { CardContainer, CartContainer,CheckOut,DishName,DishPrice,Image, Info, Price, Side } from './CartStyle'
import { total } from './helpFunctions';
export const Cart = () => {
  const orderDetails = useSelector((state: any) => state.orderDetails.value);
  const navigate=useNavigate();
	const dispatch=useDispatch();

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
          <div>TOTAL - ₪{total(orderDetails)}</div>
          <CheckOut onClick={()=>{dispatch(setCart(false));navigate('/Checkout');
          }}>checkout</CheckOut>
    </CartContainer>
  )
}
