import React, { useEffect } from "react"
import { SearchBar } from "../../Components/SearchBar/SearchBar";
import ResturantSlider from "../../Components/Slider/ResturantSlider";
import { AboutUs, Chefs, Dish, Footer, HomeContainer, Resturants, Search, Type } from "./homepageStyle";
import { DishSlider } from "../../Components/Slider/DishSlider";
import { Signature } from "../../Components/Signature/Signature";
import { Chef } from "../../Components/Chef/Chef";
import { About } from "../../Components/AboutUs/About";
import { useDispatch } from "react-redux";
import { setRestaurants } from "../Resturants/slicers/restaurantsSlicer";
import { setDishes } from "../Resturants/slicers/dishSlice";
import { setChefs } from "../Chefs/chefSlice";
import { setDishArray } from "../Resturants/slicers/dishArray";

const Homepage : React.FC<{}> =() =>{
    const restaurantUrl='http://localhost:3001/api/restaurants/getRestaurants'
    const dishesUrl='http://localhost:3001/api/dishes/getDishes'
    const chefsUrl='http://localhost:3001/api/chefs/getChefs'
    const dispatch = useDispatch();

    useEffect(() => {
        fetchData();
      }, []);

    const fetchData = () => {
        const response = Promise.all([
            fetch(restaurantUrl).then((res) =>
            res.json()).then((data) => dispatch(setRestaurants(data))),
            fetch(dishesUrl).then((res) =>
            res.json()).then((data) => dispatch(setDishArray(data))),
            fetch(chefsUrl).then((res) =>
            res.json()).then((data) => dispatch(setChefs(data))),
            ])
  
        return response;
     
    }
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