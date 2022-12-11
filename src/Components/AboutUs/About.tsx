import React from 'react'
import { Topic } from '../Slider/SliderStyle'
import { AboutContainer, AboutParagraph, App, Logo, SubContainer } from './AboutUsStyle'
import websiteLogo from "../../images/epicureLogo.svg"
import app from "../../images/application.png"

export const About = () => {
  return (
    <AboutContainer>
      <SubContainer>
        <Logo src={websiteLogo} title="logo"/>
        <App src={app} title="download app"/>
        <Topic>About us:</Topic>
        <AboutParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
          vel justo fermentum bibendum non eu ipsum. Cras porta malesuada eros, eget 
          blandit turpis suscipit at.  Vestibulum sed massa in magna sodales porta.
          Vivamus elit urna,dignissim a vestibulum.<br/>Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no
          eu ipsum. Cras porta malesuada eros.
        </AboutParagraph>
      </SubContainer>
    </AboutContainer>
  )
}

