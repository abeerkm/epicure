import styled from "styled-components";
import { Tabs } from "../restaurantStyle";
import { Details} from '../../../Components/Slider/SliderStyle';

export const Restaurant=styled.div`
    margin-bottom:4rem;
    margin-top:1rem;
` 
export const RestaurantDetails= styled(Details)`
    background:none;
    margin-left:0.8rem;
`
export const RestaurantOpen=styled.div`
    width: 5.813;
    height: 1.25rem;

    font-style: normal;
    font-weight: 200;
    font-size: 1.125rem;
    line-height: 111%;
    letter-spacing: 0.123rem;
` 
export const OpenFrame=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0rem;
    gap: 0.5rem;
    position: inherit;
    width: 7.375rem;
    height: 1.25rem;
    margin-top:0.5rem;
`
export const Clock= styled.img`

`
export const DishTabs= styled(Tabs)`
    gap:2rem;
    justify-content: flex-start;
`
export const PriceContainer= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    padding: 0rem;
    gap: 12px;
`
export const Hr= styled.hr`
    border-top: 0.031rem solid black;
    width:80%;

`
export const OpenDish= styled.div<{dishOpen:boolean}>`
    display: ${(dish) => dish.dishOpen ? 'none' : 'inline'}

`
