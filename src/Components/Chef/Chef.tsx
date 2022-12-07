import React from 'react'
import { ResturantLink } from '../CommonComponents/CommonComponents'
import { ChefSlider } from '../Slider/ChefSlider'
import { Topic } from '../Slider/SliderStyle'
import { ChefContainer, ChefName, Container, Frame, ImageContainer, Paragraph, Sub } from './ChefStyle'


export const Chef = () => {
  return (
    <Container>
    <Topic>Chef of the week: </Topic>
    <ChefContainer>
      <ImageContainer>
        <Frame>
          <ChefName>Yossi Shitrit</ChefName>
        </Frame>
      </ImageContainer>
      <Paragraph>Chef Yossi Shitrit has been living and breathing his 
        culinary dreams for more than two decades, including running the 
        kitchen in his first restaurant, the fondly-remembered Violet,
        located in Moshav Udim. Shitrit's creativity and culinary acumen
        born of long experience are expressed in the every detail
        of each and every dish.
      </Paragraph>
    </ChefContainer>
    <Sub>Chef of the week: </Sub>
    <ChefSlider/>
    <ResturantLink/>

    </Container>
  )
}
