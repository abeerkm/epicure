import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { resturantData } from "./SwipersData";
import {  CardContainer, ChefName, Details, Image, ResturantName, Topic } from "./SliderStyle";
import { ResturantLink } from "../CommonComponents/CommonComponents";

export default function ResturantSlider() {
  return (
    <>
      <Topic>popular restaurant in epicure:</Topic>
      
      <Swiper
        spaceBetween={5}
        slidesPerView={1.4}
        
      >
         {resturantData.map(resturant=>(
          <SwiperSlide key={resturant.id}>
            <CardContainer>
              <Image src={resturant.image} alt="res"/>
              <Details>
                <ResturantName>{resturant.resturantName}</ResturantName>
                <ChefName>{resturant.chefName}</ChefName>
              </Details>
            </CardContainer>
          </SwiperSlide>
        ))

        }
      </Swiper>
      <ResturantLink/>

    </>
  );
}
