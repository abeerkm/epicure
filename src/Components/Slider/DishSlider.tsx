import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { ResturantLink } from '../CommonComponents/CommonComponents';
import { Container, DishDetails, DishName, DishContent, Icon, Price } from './DishSliderStyle'
import { DishData } from "./SwipersData";
import { Topic, Image } from './SliderStyle';

export const DishSlider = () => {
  return (
    <>
    <Topic>Signature Dish Of: </Topic>

    <Swiper
      spaceBetween={5}
      slidesPerView={1.4}
      
    >
       {DishData.map(resturant=>(
        <SwiperSlide key={resturant.id}>
          <Container>
            <Image src={resturant.image} alt="res"/>
            <DishDetails>
              <DishName>{resturant.DishName}</DishName>
              <DishContent>{resturant.DishContent}</DishContent>
              <Icon src={resturant.DishType} alt="res"/>
              <Price>{resturant.price}</Price>
            </DishDetails>
          </Container>
        </SwiperSlide>

      ))

      }
    </Swiper>
    <ResturantLink/>

  </>
);
}
