import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { ResturantLink } from '../CommonComponents/CommonComponents';
import { Container, DishDetails, DishName, DishContent, Icon, Price } from './DishSliderStyle'
import { DishData } from "./SwipersData";
import { Topic, Image } from './SliderStyle';
import {  useSelector } from 'react-redux';

export const DishSlider = () => {
  const dishes = useSelector((state: any) => state.dishArray.value);

  return (
    <>
    <Topic>Signature Dish Of: </Topic>

    <Swiper
      spaceBetween={5}
      slidesPerView={1.4}
      
    >
       {dishes&& dishes.map((dish:any)=>(
        <SwiperSlide key={dish._id}>
          <Container>
            <Image src={require(`../../${dish.image}`)} alt="res"/>
            <DishDetails>
              <DishName>{dish.dishName}</DishName>
              <DishContent>{dish.description}</DishContent>
              <Icon src={require('../../images/slider-images/spicy.png')} alt="res"/>
              <Price>{dish.price}</Price>
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
