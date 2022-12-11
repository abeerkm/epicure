import styled from "styled-components";
import { Container } from "../Signature/SignatureStyle"
import { Paragraph } from '../Chef/ChefStyle'

export const AboutContainer = styled(Container)`
    height:48rem;
    justify-content: start;
    align-items: flex-start;
    gap:4rem;
    display: flex;


`;

export const SubContainer = styled.div`
    margin-left:1rem;
    flex-direction: column;


`;
export const Logo = styled.img`
    margin-top:2rem;
    display: flex;
    width: 102px;
    height: 95px;
`;
export const App = styled.img`
    display: flex;
    flex-direction: column;
    width: 180px;
    height: 120px;
    margin-top: 2rem;
    margin-bottom: 3rem;

`;
export const AboutParagraph = styled(Paragraph)`
    margin-top: 3rem;
    position: absolute;
    text-align: start;
    letter-spacing: 0.134rem;
`;




