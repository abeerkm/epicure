import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, DishDetails, DishImage, DishName, SignatureDish, DishContent, Icon, Price } from './DishSliderStyle'
import { DishData, resturantData } from "./resturantData";

export const DishSlider = () => {
  return (
    <>
    <SignatureDish>Signature Dish Of: </SignatureDish>

    <Swiper
      spaceBetween={5}
      slidesPerView={1.4}
      
    >
       {DishData.map(resturant=>(
        <SwiperSlide key={resturant.id}>
          <Container>
            <DishImage src={resturant.image} alt="res"/>
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
  </>
);
}
