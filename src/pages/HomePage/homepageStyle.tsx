import styled from "styled-components";

export const HomeContainer = styled.div`
    display: grid;
    height: 100%;
    grid-template-rows: 0.2fr 1fr 0.5fr 0.5fr;
    grid-template-areas:
    "nav nav nav nav"
    "sidebar main main main"
    "sidebar content content content"
    "sidebar footer footer footer";
    text-align: left;
    grid-gap: 3rem;
    transition: all 0.25s ease-in-out;

    @media (max-width: 800px) {
    grid-template-columns: 100%;
    grid-template-rows:  17.2rem 15rem 28rem 35rem;

    grid-template-areas:
        "searchbar"
        "resturant"
        "dishes"
        "type"
        "chefs";
    }
`;

export const Search = styled.div`
    grid-area: searchbar;
    margin-left:0;

`;
export const Resturants = styled.div`
    grid-area: resturant;
    margin-left:1rem;
`;
export const Dish = styled.div`
    grid-area: dishes;
    margin-left:1rem;
    margin-top:2rem;
`;
export const Type = styled.div`
    grid-area: type;
`;
export const Chefs =styled.div`
    grid-area: chefs;
    margin-left:1rem;

`;