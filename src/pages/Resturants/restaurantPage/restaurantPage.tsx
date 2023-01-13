import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setRestaurants } from "../slicers/restaurantsSlicer";
import { setDishes } from '../slicers/dishSlice';
import { stateValues } from '../../../interfaces/interface';
import { Content, Restaurants, RestCard, RestImage, Tab, Tabs, TabsContainer } from '../restaurantStyle';
import { Details, ResturantName, ChefName } from '../../../Components/Slider/SliderStyle';
import { Clock, DishTabs, OpenFrame, Restaurant, RestaurantOpen,RestaurantDetails, Hr, PriceContainer, OpenDish } from './restaurantPageStyle';
import { openRestaurant } from '../../../Functions/functions';
import clock from '../../../images/clock.svg';
import { MouseEvent } from "react";
import { DishContent, Price } from '../../../Components/Slider/DishSliderStyle';
import { setDishOnClick } from '../slicers/dishOnClick';
import { setDishArray } from '../slicers/dishArray';
import { Dish } from '../../../Order/Dish';
import { useNavigate } from 'react-router-dom';

export const RestaurantPage = () => {
  const restaurant = useSelector((state: stateValues) => state.restaurant.value);
  const dishArray = useSelector((state: any) => state.dishArray.value);
  const [active,setActive]=useState(0);
  const [dishOpen,setdishOpen]=useState(false);
  const navigate=useNavigate();
  const open="open now";
  const close="close now";
  const url = "http://localhost:3001/api/restaurants/getDishes";
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData(url);
  }, []);

  const fetchData = (url: string) => {
    const restaurantName = { name: restaurant.name };
    const response = fetch(url, {
      method: "POST",
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify(restaurantName)
    })
      .then((res) => res.json()).then((data) => dispatch(setDishArray(data[0].dishes)))
    return response;
  }
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    const index = parseInt(e.currentTarget.id, 0);
    if (index !== active) {
      setActive(index); 
    }
  };
 
  return (
    <Restaurant>
      <RestImage src={require(`../../../${restaurant.img}`)} title={restaurant.name}/>
      <RestaurantDetails >
        <ResturantName>{restaurant.name}</ResturantName>
        <ChefName>{restaurant.chef}</ChefName> 
        <OpenFrame>
          <Clock src={clock}/>
          <RestaurantOpen>{openRestaurant(restaurant)? open:close}</RestaurantOpen>
        </OpenFrame>
      </RestaurantDetails>
    
     <TabsContainer>
     <DishTabs>
          <Tab onClick={handleClick} active={active === 0} id="0">
            Breakfast
          </Tab>
          <Tab onClick={handleClick} active={active === 1} id="1">
            Lanch
          </Tab>
          <Tab onClick={handleClick} active={active === 2} id="2">
            Dinner
          </Tab>
        </DishTabs>
     </TabsContainer>
     <Content active={active === 0}>
         { dishArray && dishArray.filter((details: any) =>details.type=="Breakfast").map((details: any) =>
            <Restaurants key={details._id}>
              <RestCard onClick={()=>{navigate('/Order'); dispatch(setDishes(details))}}>
                <RestImage src={require(`../../../${details.image}`)} alt={details.img} title={details.dishName} />
                <Details style={{height:"9rem"}}>
                  <ResturantName>{details.dishName}</ResturantName>
                  <DishContent>{details.description}</DishContent>
                  <PriceContainer>
                    <Price>₪{details.price}</Price>
                    <Hr/>
                  </PriceContainer>
                </Details>
              </RestCard>
            </Restaurants>
          )
      }
      </Content>
      <Content active={active === 1}>
      { dishArray && dishArray.filter((details: any) =>details.type=="Lanch").map((details: any) =>
            <Restaurants key={details._id}>
              <RestCard>
                <RestImage src={require(`../../../${details.image}`)} alt={details.dishName}  />
                <Details style={{height:"9rem"}}>
                  <ResturantName>{details.dishName}</ResturantName>
                  <DishContent>{details.description}</DishContent>
                  <PriceContainer>
                    <Price>₪{details.price}</Price>
                    <Hr/>
                  </PriceContainer>
                </Details>
              </RestCard>
            </Restaurants>
          )
    }
      </Content>
      <Content active={active === 2}>
      { dishArray && dishArray.filter((details: any) =>details.type=="Dinner").map((details: any) =>
            <Restaurants key={details._id}>
              <RestCard>
                <RestImage src={require(`../../../${details.image}`)} alt={details.img} title={details.dishName}/>
                <Details style={{height:"9rem"}}>
                  <ResturantName>{details.dishName}</ResturantName>
                  <DishContent>{details.description}</DishContent>
                  <PriceContainer>
                    <Price>₪{details.price}</Price>
                    <Hr/>
                  </PriceContainer>
                </Details>
              </RestCard>
            </Restaurants>
          )
    }
      </Content>
</Restaurant>
  )
    }

