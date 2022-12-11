import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    position: absolute;
    width: 100%;
    height: 36rem;

    background-color: #FAFAFA;
`; 
export const Sentence = styled.p`
    position: flex;
    width: 11.785rem;
    height: 2.188rem;
    top:2rem;
    font-style: normal;
    font-weight: 200;
    font-size: 1.125rem;
    line-height: 194%;
    letter-spacing: 0.078rem;
    text-transform: uppercase;
    white-space: nowrap;
`; 
export const TypeImage = styled.img`
    margin-top:1.5rem;
`;
export const Type = styled.p`
    position: flex;
    width: 8.5rem;
    height: 2.188rem;
    font-style: normal;
    font-weight: 200;
    font-size: 1.125rem;
    text-align:center;
    letter-spacing: 0.125rem;

`;
