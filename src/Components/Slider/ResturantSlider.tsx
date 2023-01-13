import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { resturantData } from "./SwipersData";
import {  CardContainer, ChefName, Container, Details, Image, ResturantName, Topic } from "./SliderStyle";
import { ResturantLink } from "../CommonComponents/CommonComponents";
import {  useSelector } from 'react-redux';

export default function ResturantSlider() {
  const restaurants = useSelector((state: any) => state.restaurants.value); 
  
  return (
    <Container>
      <Topic>popular restaurant in epicure:</Topic>
      
      <Swiper
        spaceBetween={5}
        slidesPerView={1.4}
        
      >
         {restaurants&& restaurants.map((restaurant:any)=>(
          <SwiperSlide key={restaurant._id}>
            <CardContainer>
              <Image src={require(`../../${restaurant.img}`)} alt="res"/>
              <Details>
                <ResturantName>{restaurant.name}</ResturantName>
                <ChefName>{restaurant.chef}</ChefName>
              </Details>
            </CardContainer>
          </SwiperSlide>
        ))

        }
      </Swiper>
      <ResturantLink/>

    </Container>
  );
}
