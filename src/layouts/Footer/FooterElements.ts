import styled from "styled-components";

export const FooterContainer = styled.footer`
    position: relative;
    justify-content: space-between;
    bottom: 0;
    width: 100%;
    @media only screen and (max-width: 800px) {
        flex-direction: column;
        gap: 2rem;
        display: flex;
        white-space: nowrap;
        height: 6rem; 
        bottom: 3rem;
        margin-left:1rem;
    }
`;
export const Link = styled.a`
    width: 6.44rem;
    height: 1.375rem;
    font-size: 1.125rem;
    font-weight: 200rem;
    line-height: 1.375rem;
    letter-spacing: 0.12rem;
    text-align: left;
    
    `;

