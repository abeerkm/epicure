import React, { useEffect, useState } from "react"
import { Content, Tab, Tabs, TopicContainer, RestaurantContainer, Restaurants, TabsContainer, RestCard, RestImage } from "./restaurantStyle";
import { MouseEvent } from "react";
import { Details, ResturantName, ChefName } from "../../Components/Slider/SliderStyle";
import { useDispatch, useSelector } from 'react-redux';
import { setRestaurants } from "./slicers/restaurantsSlicer";
import { specificRestaurant } from "./slicers/specificRestaurant";
import { useNavigate } from "react-router-dom";
import { openRestaurant } from "../../Functions/functions";
const Resturants: React.FC<{}> = () => {

  const restaurants = useSelector((state: any) => state.restaurants.value);
  const [active,setActive]=useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const newRestaurants = [...restaurants].sort().reverse().slice(0, 3);
  const openNow = restaurants.filter(openRestaurant);

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    const index = parseInt(e.currentTarget.id, 0);
    if (index !== active) {
      setActive(index); 
    }
  };


  return (
    <RestaurantContainer>
      <TabsContainer>
        <TopicContainer>Resturants</TopicContainer>
        <Tabs>
          <Tab onClick={handleClick} active={active === 0} id="0">
            All
          </Tab>
          <Tab onClick={handleClick} active={active === 1} id="1">
            New
          </Tab>
          <Tab onClick={handleClick} active={active === 2} id="2">
            Most Popular
          </Tab>
          <Tab onClick={handleClick} active={active === 3} id="3">
            Open Now
          </Tab>
        </Tabs>
      </TabsContainer>
      <>
        <Content active={active === 0}>
          {restaurants && restaurants.map((details: any) =>
            <Restaurants key={details._id}>
              <RestCard onClick={() =>{ dispatch(specificRestaurant(details)); navigate('/Resturants/RestaurantPage')}}>
                <RestImage src={require(`../../${details.img}`)} alt={details.img} title={details.name} />
                <Details>
                  <ResturantName>{details.name}</ResturantName>
                  <ChefName>{details.chef}</ChefName>
                </Details>
              </RestCard>
            </Restaurants>
          )}
        </Content>
        <Content active={active === 1}>
          {newRestaurants && newRestaurants.map((details: any) =>
            <Restaurants key={details._id}>
              <RestCard>
                <RestImage src={require(`../../${details.img}`)} alt={details.img} title={details.name} />
                <Details>
                  <ResturantName>{details.name}</ResturantName>
                  <ChefName>{details.chef}</ChefName>
                </Details>
              </RestCard>
            </Restaurants>
          )}
        </Content>
        <Content active={active === 2}>
          {newRestaurants && newRestaurants.map((details: any) =>
            <Restaurants key={details._id}>
              <RestCard>
                <RestImage src={require(`../../${details.img}`)} alt={details.img} title={details.name} />
                <Details>
                  <ResturantName>{details.name}</ResturantName>
                  <ChefName>{details.chef}</ChefName>
                </Details>
              </RestCard>
            </Restaurants>
          )}
        </Content>
        <Content active={active === 3}>
          {openNow && openNow.map((details: any) =>
            <Restaurants key={details._id}>
              <RestCard>
                <RestImage src={require(`../../${details.img}`)} alt={details.img} title={details.name} />
                <Details>
                  <ResturantName>{details.name}</ResturantName>
                  <ChefName>{details.chef}</ChefName>
                </Details>
              </RestCard>
            </Restaurants>
          )}
        </Content>
      </>

    </RestaurantContainer>
  );
};
export default Resturants


