import styled from "styled-components";
import { Title } from '../../Order/DishStyle'
import { Button } from "../login/loginStyle";

export const Container = styled.div`
    margin-bottom:80rem;
`
export const Popup = styled.div`
isplay: flex;
flex-direction: column;
align-items: center;
padding: 40px 20px;
gap: 40px;

position: absolute;
width: 100%;
height: 160%;
left: 0px;
top: 46px;
overflow-y: scroll;
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
z-index:99;
`

export const Topic = styled.p`
    margin-top:1rem;
    align-items: center;
    text-align: center;
    letter-spacing: 2.67px;
    text-transform: uppercase;
    margin-bottom:1rem;

`
export const Payment = styled(Topic)`
    text-align: start;

`

export const InputGroup = styled.label`
    margin:2rem 0;
    position:relative;
    display:inline-block;
    width:100%;
    
`;

export const InputLabel = styled.span`
    padding:0;
    pointer-events: none;
    position:absolute;
    transition: 0.2s;
    transition-timing-function: ease;
    transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
    margin-top: 0;
    
`;

export const InputField = styled.input`
  
  padding: 2px 0;
  border: none;
  font-size: 18px;
  border-bottom: 1px solid #000000;
  width:100%;

  &:focus
  {
    border: none;
    font-size: 18px;
    border-bottom: 1px solid #000000;
    outline:0;
  }

  &:valid + ${InputLabel}
  {
    top: 1px;
    font-size:1rem;
    color: #8d8d8d;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
  }

  &:focus + ${InputLabel},&:not(:placeholder-shown) + ${InputLabel}
  {
    opacity:1;
    transform: scale(0.75) translateY(-150%) translateX(-20px);
    font-size:1.2rem;
  }

 
`;

export const PaymentButton = styled(Button)`
  width:100%
`
