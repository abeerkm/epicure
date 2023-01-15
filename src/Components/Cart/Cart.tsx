import React from 'react'
import { useSelector } from 'react-redux';
import { Topic } from '../Slider/SliderStyle'
import { CardContainer, CartContainer,DishName,Image, Info, Side } from './CartStyle'

export const Cart = () => {
  const orderDetails = useSelector((state: any) => state.orderDetails.value);
  const number=0;
  return (
    <CartContainer>
        <Topic>My order</Topic>
        {orderDetails && orderDetails.map((order: any) =>
            <CardContainer key={number+1}>
                <Image src={require(`../../${order.dishImage}`)}  title={order.dishName} />
                <Info>
                  <DishName>{order.dishName}</DishName>
                  <Side>{order.side}{order.changes.length>0?`|${order.changes}`:''}</Side>
                </Info>
            </CardContainer>
          )}
    </CartContainer>
  )
}
