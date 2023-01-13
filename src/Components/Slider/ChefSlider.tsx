import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ResturantLink } from '../CommonComponents/CommonComponents'
import { chefData } from './SwipersData'
import { CardContainer, Details, ResturantName, Topic,Image } from './SliderStyle'
import {  useSelector } from 'react-redux';

export const ChefSlider = () => {
  const chefs = useSelector((state: any) => state.chefs.value); 
  return (
    <>
      
      <Swiper
        spaceBetween={5}
        slidesPerView={1.4}
        
      >
         {chefs && chefs.map((chef:any)=>(
          <SwiperSlide key={chef._id}>
            <CardContainer>
              <Image src={require(`../../${chef.image}`)} alt="res"/>
              <Details>
                <ResturantName>{chef.name}</ResturantName>
              </Details>
            </CardContainer>
          </SwiperSlide>
        ))
        }
      </Swiper>

    </>
  )
}
