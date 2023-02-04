import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { openCart } from '../../Functions/functions';
import { setCart } from '../../pages/Resturants/slicers/cart';
import { Topic } from '../Slider/SliderStyle'
import { CartComponent } from './CartComponent';
import { CardContainer, CartContainer,CheckOut,DishName,DishPrice,Image, Info, Price, Side } from './CartStyle'
import { total } from './helpFunctions';
export const Cart = () => {
  const navigate=useNavigate();
	const dispatch=useDispatch();

  return (
    
    <CartContainer>
        <CartComponent/>
          <CheckOut onClick={()=>{dispatch(setCart(false));navigate('/Checkout');
          }}>checkout</CheckOut>
    </CartContainer>
  )
}
