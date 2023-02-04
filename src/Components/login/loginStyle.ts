import styled from "styled-components";
import { SearchNav } from "../../layouts/Header/HeaderMobile/NavElements";
export const Popup= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0px;
    gap: 40px;

    position: absolute;
    width: 100%;
    height: 590px;
    left: 0px;
    top: 46px;

    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
` 
export const Form= styled.div`
    align-items: center;
    display:contents;
`

export const Sentence= styled.a`
    width: 85%;
    height: 18px;
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    margin-top: 1rem;
    white-space: nowrap;
    text-align: center;
    letter-spacing: 2.4px;
    color: #000000;
    text-decoration: none;
    margin-bottom: -3rem;

`
export const Forget= styled(Sentence)`
margin-top:3rem;
`


export const Input=styled.input`
    background: transparent;
    border: none;
    margin-top: 4rem;
    border-bottom: 1px solid #000000;
    width: 85%;
    height: 2rem;
    margin-bottom: -3rem;

`
export const Label=styled.label`
    position: absolute;
    pointer-events: none;
    transform: translate(0, 23px) scale(1);
    transform-origin: top left;
    transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    color: #6f81a5;
    font-size: 16px;
    line-height: 1;
    left: 16px;
`

export const Button=styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px 24px;
    gap: 10px;
    color:white;
    width: 206px;
    height: 3rem;
    text-transform: uppercase;
    font-size: 18px;
    background: #979797;
    margin-top:3rem;
    margin-bottom: -4.5rem;
`
export const Or=styled.h3`
   width: 80%; 
   text-align: center; 
   border-bottom: 1px solid #000; 
   line-height: 0.1em;
   margin: 40px 0 20px;
   padding:0 10px;
   margin-bottom: -3rem;
   margin-top: 4rem;
`
export const Span=styled.span`
    background:#fff; 
    padding:0 10px; 
`
export const WhiteButton=styled(Button)`
    background: #FFFFFF;
    color:black;
`;

