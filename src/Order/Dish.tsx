import React, { useState } from 'react'
import { CheckBox, Close, ComponentContainer, Container, DishContainer, DishDetails, HiddenCheckbox, Input, Label, Nav, Paragraph, Quantity, RadioBox, Title } from './DishStyle'
import close from "../images/close.svg"
import { useNavigate } from 'react-router-dom';
import { RestImage } from '../pages/Resturants/restaurantStyle';
import { useSelector } from 'react-redux';
import { DishName , DishContent } from "../Components/Slider/DishSliderStyle";

export const Dish = () => {
  const dish = useSelector((state: any) => state.dishes.value);
  const navigate=useNavigate();
  const [count, setCount] = useState(1);
  function incrementCount() {
    setCount(count+1);
  }
  function decrementCount() {
    setCount(count-1);
  }
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
            <Input type="radio" name="location" id="bread" value="bread" />
            <RadioBox></RadioBox>
            <Paragraph>White bread</Paragraph>
          </Label>

          <Label id="rice">
            <Input type="radio" name="location" id="rice" value="rice" />
            <RadioBox></RadioBox>
            <Paragraph>Sticky rice</Paragraph>
          </Label>
        <CheckBox>
          <Title>Changes</Title>
          <Label id="peanuts">
            <input id="peanuts" type="checkbox"  />
            <Paragraph>Sticky rice</Paragraph>
          </Label>

          <Label id="spicy">
            <input id="spicy" type="checkbox"  />
            <Paragraph>Sticky Less spicy</Paragraph>
          </Label>
          </CheckBox>
          <Title>Quantity</Title>
          <Quantity>{count}</Quantity>
    </Container>
    </DishContainer>
  </ComponentContainer>
  )
}
