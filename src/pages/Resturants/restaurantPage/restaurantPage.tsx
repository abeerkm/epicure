import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setRestaurants } from "../slicers/restaurantsSlicer";
import { setDishes } from '../slicers/dishSlice';
import { stateValues } from '../../../interfaces/interface';
import { Content, Restaurants, RestCard, RestImage, Tab, Tabs, TabsContainer } from '../restaurantStyle';
import { Details, ResturantName, ChefName } from '../../../Components/Slider/SliderStyle';
import { Clock, DishTabs, OpenFrame, Restaurant, RestaurantOpen,RestaurantDetails, Hr, PriceContainer } from './restaurantPageStyle';
import { openRestaurant } from '../../../Functions/functions';
import clock from '../../../images/clock.svg';
import { MouseEvent } from "react";
import { DishContent, Price } from '../../../Components/Slider/DishSliderStyle';

export const RestaurantPage = () => {
  const restaurant = useSelector((state: stateValues) => state.restaurant.value);
  const dishes = useSelector((state: stateValues) => state.dishes.value);
  const [active,setActive]=useState(0);
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
      .then((res) => res.json()).then((data) => dispatch(setDishes(data[0].dishes)))
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
      <RestImage src={require(`../../../${restaurant.img}`)}/>
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
         { dishes && dishes.filter((details: any) =>details.type=="Breakfast").map((details: any) =>
            <Restaurants key={details._id}>
              <RestCard>
                <RestImage src={require(`../../../${details.image}`)} alt={details.img} />
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
      { dishes && dishes.filter((details: any) =>details.type=="Lanch").map((details: any) =>
            <Restaurants key={details._id}>
              <RestCard>
                <RestImage src={require(`../../../${details.image}`)} alt={details.img} />
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
      { dishes && dishes.filter((details: any) =>details.type=="Dinner").map((details: any) =>
            <Restaurants key={details._id}>
              <RestCard>
                <RestImage src={require(`../../../${details.image}`)} alt={details.img} />
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

