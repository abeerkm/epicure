import styled from "styled-components";
import ChefImage from "../../images/ChefOfTheWeek.png";
import { Topic } from "../Slider/SliderStyle";

export const Container = styled.div`
    flex-direction: column;
    display: flex;
    align-items: left;

`;
export const ChefContainer = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin-top:1rem;


`;

export const ImageContainer = styled.div`
    background-image: url(${ChefImage});
    background-repeat:no-repeat;
    display: flex;
    width: 95%;
    height: 17rem;
    margin-top:2rem;
    display: flex;
    justify-content: center;
    bottom:0rem;
    position:relative;
    background-size:cover;

`; 

export const Frame = styled.div`
    text-align: center;
    line-height: 1;
    width: 100%;
    height: 20%;
    background: rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    bottom:0;
    position:absolute;

`;
export const ChefName = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 261%;
    text-align: center;
    letter-spacing: 0.17rem;

    color: #000000;

`;
export const Paragraph = styled.span`
    font-style: normal;
    font-weight: 200;
    font-size: 1.125rem;
    line-height: 156%;
    text-align: justify;
    letter-spacing: 0.078rem;
    width: 95%;
    color: #000000;
    margin-top: 1rem;
`;
export const Sub = styled(Paragraph)`
    font-size: 1rem;
    text-transform: uppercase;
    line-height: 160%;
    margin-bottom: -1rem;
    margin-top: 2rem;



`;

