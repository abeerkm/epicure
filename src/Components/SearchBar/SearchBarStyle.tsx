import styled from "styled-components";
import heroImage from "../../images/hero-picture.png"

export const HeroImage = styled.div`
    background-image: url(${heroImage});
    position: absolute;
    width: 200%;
    height: 17rem;
    top: 2.875rem;
    background-repeat:no-repeat;
    background-size:cover;
    display:flex;

    
`;
export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 18px;
    position: absolute;
    width: 80%;
    height: 9rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background: rgba(255, 255, 255, 0.88);
`;
export const Sentence = styled.p`
    position: absolute;
    width: 90%;
    font-style: normal;
    font-weight: 200;
    font-size: 1.5rem;
    line-height: 2rem;
    color: #000000;
    text-align: left;
    margin-bottom:15%;


`;
export const SearchBox = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;

    width: 90%;
    height: 1.875rem;
    border: 0.025rem solid #000000;
    border-radius: 0.25%;
    margin-top:5rem;
`;
export const Icon = styled.div`
    margin-left:5%;
    font-size: 1.4rem;
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
