import styled from "styled-components";
import { Nav } from "../../layouts/Header/HeaderMobile/NavElements";
import { Topic } from './CheckoutStyle';

export const Popup=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 2.8rem;
    left: 0;
    height: 23.9rem;
    width: 100%;
    background-color: white;
    transition: 0.5s;
    z-index:99;
    position: absolute;
    overflow: scroll;
    height:70%;

`
export const Image=styled.img`
    margin-top:-2rem;
`

export const OrderTopic=styled(Topic)`
    font-size:1.5rem;
`
export const Sentence=styled.p`
    font-size:1.5rem;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
  
    text-align: center;

    color: #000000;
    margin-bottom:2rem;


`
export const Container=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 16px;
    margin-bottom:1rem;


`
export const OrderContainer=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 32px;
    
`
