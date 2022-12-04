import React from "react"
import  './homepageStyle.tsx'
import { SearchBar } from "../../Components/SearchBar/SearchBar";
import Slider from "../../Components/Slider/Slider";
import { Chefs, HomeContainer, Resturants, Search, Type } from "./homepageStyle";
import { DishSlider } from "../../Components/Slider/DishSlider";
import { Signature } from "../../Components/Signature/Signature";
const Homepage : React.FC<{}> =() =>{
    
    return(
    <HomeContainer>
    <Search><SearchBar/></Search>
    <Resturants><Slider/></Resturants>
    <Chefs><DishSlider/></Chefs>
    <Type><Signature/></Type>
    </HomeContainer>

    );
};
export default Homepage