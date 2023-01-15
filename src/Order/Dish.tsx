import React, { useState } from 'react'
import { BagButton, ButtonQuantity, CheckBox, Close, ComponentContainer, Container, DishContainer, DishDetails, HiddenCheckbox, Input, Label, Nav, Paragraph, Quantity, QuantityContainer, RadioBox, Title } from './DishStyle'
import close from "../images/close.svg"
import { useNavigate } from 'react-router-dom';
import { RestImage } from '../pages/Resturants/restaurantStyle';
import { useDispatch, useSelector } from 'react-redux';
import { DishName , DishContent } from "../Components/Slider/DishSliderStyle";
import { setOrder } from './OrderSlice';

export const Dish = () => {
  const dish = useSelector((state: any) => state.dishes.value);
  const orderd = useSelector((state: any) =>state.orderDetails.value);
  const navigate=useNavigate();
  const [count, setCount] = useState(1);
  const [sideSelected, setSideSelected] = useState('White bread');
  const [checkList, setList ]= useState<string[]>([]);
  const dispatch=useDispatch();
  const order= {
     dishName: '', dishImage: '',side:'',changes:[''],quantity:0,price:0 }

  function incrementCount() {
    setCount(count+1);
  }
  function decrementCount() {
    count>1? setCount(count-1):setCount(count);
  }
  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSideSelected(event.target.value);
  }
  const handleCheck = (event: { target: { value: any; }; }) => {
    const value = event.target.value;
    setList((prev:any) =>
    checkList.includes(value)
        ? prev.filter((cur: any) => cur !== value)
        : [...prev, event.target.value]
    );
  };
  const addToBag=()=>{
    order.dishName=dish.dishName;
    order.dishImage=dish.image;
    order.side=sideSelected;
    order.changes=checkList;
    order.quantity=count;
    order.price=dish.price;
    dispatch(setOrder([order]));
  }  
console.log(orderd)
  return (
  <ComponentContainer>
    <Nav>
      <Close onClick={()=>navigate('/Resturants/RestaurantPage')} src={close}/>
    </Nav>
    <RestImage src={require(`../${dish.image}`)} title={dish.dishName}/>
    <DishDetails>
    <DishName>{dish.dishName}</DishName>
    <DishContent>{dish.description}</DishContent>
    </DishDetails>
    <DishContainer>
    <Title>Choose a side</Title>
   <Container>
        <Label id="bread">
            <Input type="radio"
            name="location"
            id="bread"
            value="White bread" 
            checked={true}
            onChange={handleChange}/>
            <RadioBox></RadioBox>
            <Paragraph>White bread</Paragraph>
          </Label>

          <Label id="rice">
            <Input type="radio"
              name="location" 
              id="rice" 
              value="Sticky rice" 
              onChange={handleChange}/>

            <RadioBox></RadioBox>
            <Paragraph>Sticky rice</Paragraph>
          </Label>
        <CheckBox>
          <Title>Changes</Title>
          <Label id="peanuts">
            <input id="peanuts" type="checkbox" value='Whithout peanuts' onChange={handleCheck}  />
            <Paragraph>Whithout peanuts</Paragraph>
          </Label>

          <Label id="spicy">
            <input id="spicy" type="checkbox" value='Sticky Less spicy' onChange={handleCheck} />
            <Paragraph>Sticky Less spicy</Paragraph>
          </Label>
          </CheckBox>
          <Title>Quantity</Title>
          <QuantityContainer>
          <ButtonQuantity onClick={decrementCount}>-</ButtonQuantity>
            <Quantity>{count}</Quantity>
            <ButtonQuantity onClick={incrementCount}>+</ButtonQuantity>
            </QuantityContainer>
            <BagButton onClick={addToBag}>add to bag</BagButton>
    </Container>
    </DishContainer>
  </ComponentContainer>
  )
}
