import React from 'react'
import styled from 'styled-components'
import { CardContainer , Details, ChefName, ResturantName } from './SliderStyle'

export const Container = styled(CardContainer)`
    height: 22rem;
`;

export const DishDetails = styled(Details)`
    height:17rem;
    gap:1rem;
`;
export const DishName = styled(ResturantName)`
`;
export const DishContent = styled(ChefName)`
    width:90%;
    white-space: normal;
    margin-left:0.5rem;

`;
export const Icon = styled.img`
    height: 1.9rem;
    width: 1.9rem;
    margin-left:0.5rem;

`;
export const Price = styled.p`
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.2rem;
    letter-spacing: 0.2rem;
    margin-left:0.5rem;

`;

