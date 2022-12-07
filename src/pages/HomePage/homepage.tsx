import React from "react"
import  './homepageStyle.tsx'
import { SearchBar } from "../../Components/SearchBar/SearchBar";
import ResturantSlider from "../../Components/Slider/ResturantSlider";
import { Chefs, Dish, HomeContainer, Resturants, Search, Type } from "./homepageStyle";
import { DishSlider } from "../../Components/Slider/DishSlider";
import { Signature } from "../../Components/Signature/Signature";
import { Chef } from "../../Components/Chef/Chef";
const Homepage : React.FC<{}> =() =>{
    
    return(
    <HomeContainer>
    <Search><SearchBar/></Search>
    <Resturants><ResturantSlider/></Resturants>
    <Dish><DishSlider/></Dish>
    <Type><Signature/></Type>
    <Chefs><Chef/></Chefs>
    </HomeContainer>

    );
};
export default Homepage