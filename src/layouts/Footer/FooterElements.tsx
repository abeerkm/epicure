import styled from "styled-components";

export const FooterContainer = styled.footer`
    position: absolute;
    justify-content: space-between;
    bottom: 0;
    width: 100%;
    height: 5rem; 
    @media only screen and (max-width: 800px) {
        flex-direction: column;
        gap: 1.5rem;
        display: flex;
        white-space: nowrap;
        bottom:0;
        margin-left:0;
       
    }
`;
export const Link = styled.a`
    font-size: 1.125rem;
    font-weight: 200rem;
    line-height: 1.375rem;
    letter-spacing: 0.12rem;
    text-align: left;
    
    `;

