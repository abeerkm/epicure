import styled from "styled-components";

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
    gap: 0.625rem;

    width: 100%;
    height: 5.6rem;

    background: #F9F4EA;

    
`;
export const ResturantName = styled.p`
    width: 3.375rem;
    height: 1.4rem;
    white-space: nowrap;

    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 21px;
    letter-spacing: 2.67px;


`;
export const ChefName = styled.p`
  
    white-space: nowrap;

    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 1rem;
    line-height: 125%;

`;
export const Topic = styled.p`
    position: absolute;
    width: 50%;
    height: 1.5rem;
    white-space: nowrap;
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 1.2rem;
    line-height: 133%;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    color: #000000;
    margin-bottom:10rem;

`;