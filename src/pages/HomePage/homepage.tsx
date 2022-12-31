import React from "react"
import { SearchBar } from "../../Components/SearchBar/SearchBar";
import ResturantSlider from "../../Components/Slider/ResturantSlider";
import { AboutUs, Chefs, Dish, Footer, HomeContainer, Resturants, Search, Type } from "./homepageStyle";
import { DishSlider } from "../../Components/Slider/DishSlider";
import { Signature } from "../../Components/Signature/Signature";
import { Chef } from "../../Components/Chef/Chef";
import { About } from "../../Components/AboutUs/About";

const Homepage : React.FC<{}> =() =>{
    
    return(
    <HomeContainer>
    <Search><SearchBar/></Search>
    <Resturants><ResturantSlider/></Resturants>
    <Dish><DishSlider/></Dish>
    <Type><Signature/></Type>
    <Chefs><Chef/></Chefs>
    <AboutUs><About/></AboutUs>
    <Footer></Footer>
    </HomeContainer>

    );
};
export default Homepage