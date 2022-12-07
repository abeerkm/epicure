import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ResturantLink } from '../CommonComponents/CommonComponents'
import { chefData } from './SwipersData'
import { CardContainer, Details, ResturantName, Topic,Image } from './SliderStyle'

export const ChefSlider = () => {
  return (
    <>
      
      <Swiper
        spaceBetween={5}
        slidesPerView={1.4}
        
      >
         {chefData.map(resturant=>(
          <SwiperSlide key={resturant.id}>
            <CardContainer>
              <Image src={resturant.image} alt="res"/>
              <Details>
                <ResturantName>{resturant.dishName}</ResturantName>
              </Details>
            </CardContainer>
          </SwiperSlide>
        ))
        }
      </Swiper>

    </>
  )
}
