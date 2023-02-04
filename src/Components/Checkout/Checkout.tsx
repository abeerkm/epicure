import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Close, ComponentContainer, Nav, Title } from '../../Order/DishStyle'
import { Form, Input } from '../login/loginStyle'
import close from "../../images/close.svg"
import { Container, InputField, InputGroup, InputLabel, Payment, PaymentButton, Popup, Topic } from './CheckoutStyle'
import { Cart } from '../Cart/Cart'
import { CartComponent } from '../Cart/CartComponent'
import { ValidateCheckOut } from './ValidateCheckOut'
import { setCart } from '../../pages/Resturants/slicers/cart'
import { useDispatch } from 'react-redux'
import { setCheckout } from '../../pages/Resturants/slicers/checkout'

 const Checkout = () => {
  const [name, setName] = useState('');
  const [address, setAdress] = useState('');
  const [phone, setPhone] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cvv, SetCVV] = useState('');
  const [expireDate, setExpireDate] = useState('');

  const [buttonColor, setButtonColor] = useState('black');
  const dispatch=useDispatch();

  const [disabled, setDisabled] = useState<boolean>(true);
  const args = { name, address, phone,cardNumber,cardName,cvv,expireDate};
  const navigate = useNavigate();

  useEffect(() => {
    ValidateCheckOut({ args, setButtonColor, setDisabled });
  }, [args])

  return (
    <Container>
      <Nav>
        <Close onClick={() => navigate(-1)} src={close} />
      </Nav>
      <Popup>
        <Topic>delivery details</Topic>
        <Form>
          <InputGroup>
            <InputField type='text' placeholder=' ' onChange={(e) => setName(e.target.value)}/>
            <InputLabel>Full Name</InputLabel>
          </InputGroup>
          <InputGroup>
            <InputField placeholder=' ' onChange={(e) => setAdress(e.target.value)}/>
            <InputLabel>Address</InputLabel>
          </InputGroup>
          <InputGroup>
            <InputField type='number' placeholder=' ' onChange={(e) => setPhone(e.target.value)}/>
            <InputLabel>Phone</InputLabel>
          </InputGroup>
          <Payment>payment details</Payment>
          <InputGroup>
            <InputField type='number' placeholder=' ' onChange={(e) => setCardNumber(e.target.value)}/>
            <InputLabel>Card Number</InputLabel>
          </InputGroup>
          <InputGroup>
            <InputField type='text' placeholder=' ' onChange={(e) => setCardName(e.target.value)}/>
            <InputLabel>Name On Card</InputLabel>
          </InputGroup><InputGroup>
            <InputField type='number' placeholder=' ' onChange={(e) => SetCVV(e.target.value)}/>
            <InputLabel>CVV</InputLabel>
          </InputGroup><InputGroup>
            <InputField type='text' placeholder=' ' onChange={(e) => setExpireDate(e.target.value)}/>
            <InputLabel>Expiry Date</InputLabel>
          </InputGroup>
          <CartComponent/>
          <PaymentButton style={{ background: `${buttonColor}` }} disabled={disabled} type='submit' onClick={()=>{navigate('/');dispatch(setCheckout(true))}}>Complete payment</PaymentButton>
        </Form>

      </Popup>
    </Container>
  )
}
export default Checkout;

