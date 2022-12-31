import React, { useEffect, useState } from "react"
import { Content, Tab, Tabs, TopicContainer, RestaurantContainer, Restaurants, TabsContainer, RestCard, RestImage } from "./restaurantStyle";
import { MouseEvent } from "react";
import { Details, ResturantName, ChefName } from "../../Components/Slider/SliderStyle";
import { useDispatch, useSelector } from 'react-redux';
import { setRestaurants } from "./slicers/restaurantsSlicer";
import { specificRestaurant } from "./slicers/specificRestaurant";
import moment from 'moment'
import { useNavigate } from "react-router-dom";

const Resturants: React.FC<{}> = () => {

  const restaurants = useSelector((state: any) => state.restaurants.value);
  const restaurant = useSelector((state: any) => state.restaurant.value);
  const [active, setActive] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const url = "http://localhost:3001/api/restaurants/getRestaurants";

  useEffect(() => {
    fetchData(url);
  }, []);
  
  const fetchData = (url:string) => {
      const response = fetch(url).then((res) =>
        res.json()).then((data) => dispatch(setRestaurants(data)));

      return response;
   
  }
  const newRestaurants = [...restaurants].sort().reverse().slice(0, 3);


  const openNow = restaurants.filter((restaurant: any) => {
    let isOpen = false;
    const day = moment().format("dddd").toLowerCase();
    for (let i = 0; i < restaurant.workingHours.length; i++) {
      if (restaurant.workingHours[i].day.toLowerCase() == day) {
        if (moment().isBetween(moment(restaurant.workingHours[i].open, "hh:mm"),
          moment(restaurant.workingHours[i].close, "hh:mm"), "minute", "[]")) {
          isOpen = true;
          break;
        }
      }

    }
    return isOpen;
  });


  const handleClick = (e: MouseEvent<HTMLElement>) => {
    const index = parseInt(e.currentTarget.id, 0);
    if (index !== active) {
      setActive(index);
      //setUrl(urls[index]);
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
              <RestCard onClick={() =>{ dispatch(specificRestaurant(details)); navigate('/RestaurantPage')}}>
                <RestImage src={require(`../../${details.img}`)} alt={details.img} />
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
                <RestImage src={require(`../../${details.img}`)} alt={details.img} />
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
                <RestImage src={require(`../../${details.img}`)} alt={details.img} />
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
                <RestImage src={require(`../../${details.img}`)} alt={details.img} />
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


