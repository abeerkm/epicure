import React from 'react'
import { useSelector } from 'react-redux';
import { Topic } from '../Slider/SliderStyle';
import { CardContainer, Info, DishName, Side, Price, DishPrice,Image, CartContainer } from './CartStyle';
import { total } from './helpFunctions';

export const CartComponent = () => {
  const orderDetails = useSelector((state: any) => state.orderDetails.value);

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
          </CartContainer>
  )
}
