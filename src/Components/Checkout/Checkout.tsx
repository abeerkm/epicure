import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Close, ComponentContainer, Nav, Title } from '../../Order/DishStyle'
import { Form, Input } from '../login/loginStyle'
import close from "../../images/close.svg"
import { Container, InputField, InputGroup, InputLabel, Payment, Popup, Topic } from './CheckoutStyle'

export const Checkout = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Nav>
        <Close onClick={() => navigate('/Resturants/RestaurantPage')} src={close} />
      </Nav>
      <Popup>
        <Topic>delivery details</Topic>
        <Form>
          <InputGroup>
            <InputField type='text' placeholder=' ' />
            <InputLabel>Full Name</InputLabel>
          </InputGroup>
          <InputGroup>
            <InputField placeholder=' ' />
            <InputLabel>Address</InputLabel>
          </InputGroup>
          <InputGroup>
            <InputField type='number' placeholder=' ' />
            <InputLabel>Phone</InputLabel>
          </InputGroup>
          <Payment>payment details</Payment>
          <InputGroup>
            <InputField type='number' placeholder=' ' />
            <InputLabel>Card Number</InputLabel>
          </InputGroup>
          <InputGroup>
            <InputField type='text' placeholder=' ' />
            <InputLabel>Name On Card</InputLabel>
          </InputGroup><InputGroup>
            <InputField type='number' placeholder=' ' />
            <InputLabel>CVV</InputLabel>
          </InputGroup><InputGroup>
            <InputField type='text' placeholder=' ' />
            <InputLabel>Expiry Date</InputLabel>
          </InputGroup>

        </Form>

      </Popup>
    </Container>
  )
}
