import React from "react"
import { SearchBar } from "../../Components/SearchBar/SearchBar";
import ResturantSlider from "../../Components/Slider/ResturantSlider";
import { AboutUs, Chefs, Dish, FooterContainer, HomeContainer, Resturants, Search, Type } from "./homepageStyle";
import { DishSlider } from "../../Components/Slider/DishSlider";
import { Signature } from "../../Components/Signature/Signature";
import { Chef } from "../../Components/Chef/Chef";
import { About } from "../../Components/AboutUs/About";
import Footer from "../../layouts/Footer/Footer";

const Homepage : React.FC<{}> =() =>{
    
    return(
    <HomeContainer>
    <Search><SearchBar/></Search>
    <Resturants><ResturantSlider/></Resturants>
    <Dish><DishSlider/></Dish>
    <Type><Signature/></Type>
    <Chefs><Chef/></Chefs>
    <AboutUs><About/></AboutUs>
    <FooterContainer><Footer/></FooterContainer>
    </HomeContainer>

    );
};
export default Homepage