import styled from "styled-components";

export const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75rem;
    margin-top:1rem;
`;

export const Arrow = styled.img`

`;
export const ResturantsLink = styled.a`
    text-decoration: none;
    text-align: right;
    letter-spacing: 0.125rem;
    text-transform: capitalize;
    font-size:1.2rem;
    color: #000000;
    font-weight: 400;

`;
export const SearchBox = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;

    width: 85%;
    height: 1.875rem;
    border: 0.025rem solid #000000;
    border-radius: 0.3rem;
    margin-top:5rem;
`;
export const Icon = styled.img`
    margin-left:3%;
    height:15px;
    width:15px;
`;

export const SearchInput = styled.input`
    width: 80%;
    height: 1rem;
    background: transparent;
    border: none;

    font-style: normal;
    font-weight: 200;
    font-size: 12px;
    line-height: 1rem;
    margin-left: 1rem;
    color: #000000;
`; 

