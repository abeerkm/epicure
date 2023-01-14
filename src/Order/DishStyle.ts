import styled from "styled-components";
import { Button } from "../Components/login/loginStyle";

export const ComponentContainer = styled.nav`
    margin-bottom:12rem;
`
export const Nav = styled.nav`
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    height: 3rem;
    width: 100%;
    background-color: white;
    transition: 0.5s;
    justify-content: space-between;
    z-index:99;

`;
export const Close = styled.img`
    color:rgba(0, 0, 0, 1);
    display: flex;
    padding: 0.313rem;
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    font-size: 1.8rem;
    left: 5%;
    visibility: visible;
	opacity: 1;
    margin-top:0.5rem;
      
`;
export const DishDetails=styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    padding: 0px;
    gap: 0.6rem;
    margin-top: 1rem;
    margin-left: 1rem;

`
export const Container = styled.div`
  background: white;
  display: inline-flex;
  height: 7rem;
  width: 15rem;
  border-radius: 0.5rem;
  justify-content: center;
  padding-left: 1rem;
  padding-right: 1rem;
  flex-direction: column;
`;
export const DishContainer=styled.div`
    margin-left:1rem;
    margin-top:2rem;
`
export const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Paragraph = styled.p`
  font-size: 0.875rem;
  line-height: 1.313rem;
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  margin-left: 0.2rem;
`;
export const RadioBox = styled.div`
  height: 1.125rem;
  width: 1.125rem;
  border: 1px solid #b9bdcf;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 0.4rem;
  transition: background 0.15s, border-color 0.15s;
  padding: 2px;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    background: #2266dc;
    border-radius: 50%;
    cursor: pointer;
    transform: scale(0);
  }
`;
export const Input = styled.input`
  display: none;
  &:checked + ${RadioBox} {
      &::after {
        transform: scale(1);
      }
`;
export const Title = styled.p`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 20px;
    line-height: 18px;
    margin-bottom: 1rem;
}
`
export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`
export const CheckBox=styled.div`
    margin-top:2rem;
    gap:1rem;
`
export const Quantity=styled.div`
    font-style: normal;
    font-weight: 200;
    font-size: 1.5rem;
    line-height: 1rem;
    text-align: center;
    letter-spacing: 1.97px;
    margin-top: 0.4rem;
`
export const QuantityContainer=styled.div` 
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 32px;
`
export const ButtonQuantity=styled.button` 
  border:none;
  background: none;
  font-size:2rem;
`
export const BagButton=styled(Button)`
  margin-top:0.5rem;
  background:black;
`