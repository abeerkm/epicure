import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Close, Nav } from '../../Order/DishStyle'
import { Popup, Image, OrderTopic,Sentence ,OrderContainer, Container} from './OrderCompleteStyle'
import close from "../../images/close.svg"
import vector from '../../images/Vector.svg'
import { Topic } from './CheckoutStyle';
import { useDispatch, useSelector } from 'react-redux';
import { DishName, DishPrice } from '../Cart/CartStyle';
import { total } from '../Cart/helpFunctions';
import { setCheckout } from '../../pages/Resturants/slicers/checkout';
export const OrderComplete = () => {
  const orderDetails = useSelector((state: any) => state.orderDetails.value);
  const dispatch=useDispatch();
  return (
    <Popup>
      <Nav>
        <Close onClick={()=>dispatch(setCheckout(false))} src={close}/>
      </Nav>
      <Image src={vector}></Image>
      <OrderTopic>order recived</OrderTopic>
      <Sentence>Your food is in process</Sentence>
      <Container>
      {orderDetails && orderDetails.map((order: any,index:number) =>
            <OrderContainer key={index}>
                  <DishName>{order.quantity}x {order.dishName}</DishName>
                    <DishPrice>₪{order.price}</DishPrice>
            </OrderContainer>
          )}
      </Container>
          <div>TOTAL - ₪{total(orderDetails)}</div>
      

    </Popup>
  )
}
