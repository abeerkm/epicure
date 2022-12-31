import styled from "styled-components";
import { Topic } from "../../Components/Slider/SliderStyle";
import { CardContainer, Image } from "../../Components/Slider/SliderStyle";

export const RestaurantContainer = styled.div`
`;
export const TabsContainer = styled.div`
    margin-top:1rem;

`;
export const TopicContainer = styled(Topic)`

    left: 1.244rem;
    width: 8.563rem;
    letter-spacing: 0.12rem;
    position:relative;
`;
export const Tabs = styled.div`
  overflow: hidden;
  height: 2rem;
  flex-direction: row;
  align-items: flex-start;
  display: flex;
  position: relative;
  gap:1rem;
  margin-top:1rem;
  margin-right: 1.3rem;
  margin-left:1.2rem;
  justify-content: space-between;

`;

export const Tab = styled.button<{ active: boolean }>`
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  white-space: nowrap;
  font-style: normal;
  font-size: 1.125rem;
  background-color: white;
  border-bottom: ${props => (props.active ? "0.188rem solid rgba(222, 146, 0, 0.9)" : "none")};
  font-weight: ${props => (props.active ? "400" : "200")};
  font-family: inherit;

`;
export const Content = styled.div<{ active: boolean }>`
  position: inherit;
  width: 100%;
  margin-bottom:8rem;
  ${props => (props.active ? "" : "display:none")}
`;
export const Restaurants = styled.div`
  justify-content: center;
  display:flex;

`;
export const RestCard = styled(CardContainer)`
  height: 20%;
`;
export const RestImage = styled(Image)`
   height: fit-content;

`;
