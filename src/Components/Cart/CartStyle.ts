import styled from "styled-components";
import { BagButton } from "../../Order/DishStyle";
export const CartContainer= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 12px 24px;
    gap: 2rem;
    text-align: center;
`
export const CardContainer= styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;

    width: 90%;
    height: 100%;
`
export const Image= styled.img`
    width: 47%;
    height: 96px;
`
export const Info= styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 12px 12px 12px 24px;
    gap: 8px;

    width: 100%;
    height: 96px;

    background: #F9F4EA;
    `
export const DishName= styled.p`
    width: 146px;
    height: 26px;

    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 186%;
    text-align: center;
    letter-spacing: 2.67px;
`
export const Side= styled.p`
    width: 90%;
    height: 16px;

    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 200;
    font-size: 12px;
    line-height: 133%;
    letter-spacing: 1.23px;
`
export const Price= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: flex-end;
    padding: 0px;
    gap: 2px;
    margin-top: 1.1rem;
    width: 100%;
    height: 0;
`
export const DishPrice=styled.p``

export const CheckOut=styled(BagButton)`
    margin-top: -1.7rem;
`