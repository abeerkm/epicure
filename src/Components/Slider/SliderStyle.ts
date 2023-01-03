import styled from "styled-components";
export const Container = styled.div`

`;
export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top:2rem;
    width: 90%;
    height: 12.5rem;
`;
export const Image = styled.img`
    width: 100%;
    height: 8.2rem;
    
`;

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 0.5rem;
    gap: 0.8rem;
    width: 100%;
    height: 6rem;

    background: #F9F4EA;

    
`;
export const ResturantName = styled.p`
    width: 3.375rem;
    height: 1.4rem;
    white-space: nowrap;
    margin-left:0.1rem;

    font-style: normal;
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.3rem;
    letter-spacing: 0.167rem;


`;
export const ChefName = styled.p`
    margin-left:0.1rem;
    white-space: nowrap;
    font-style: normal;
    font-weight: 200;
    font-size: 1rem;
    line-height: 125%;

`;
export const Topic = styled.h3`
    position: absolute;
    max-width: 70%;
    height: 1.5rem;
    white-space: nowrap;
    font-style: normal;
    font-weight: 200;
    line-height: 133%;
    letter-spacing: 0.07rem;
    text-transform: uppercase;
    color: #000000;
    font-size:1.125rem;

`;

