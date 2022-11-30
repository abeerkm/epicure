import styled from "styled-components";

export const NavHeader = styled.header`
    display: flex;
    align-items: center;
    max-height: 2.875rem;
    padding: 0 1rem;
    background: #FFFFFF;
    justify-content: space-between;
    align-items: flex-start;
    left: -1px;

`;
export const MenuItems = styled.ul`
    display: inline-block;
    justify-content: space-between;
    position: absolute;
    list-style-type: none;
    top:1rem;

    @media only screen and (max-width: 800px) {
        flex-direction: column;
        gap: 1.5rem;
        margin-left: 1.5rem;
        display: flex;
        margin-top:2.5rem;
        
    }
`;
export const List = styled.li`
`;
export const ListA = styled.a`
    color: rgba(0, 0, 0, 1);
    text-decoration: none;
    @media only screen and (max-width: 800px) {
        font-size: 1.125rem;
		font-weight: 200;
		line-height: 1.375rem;
		letter-spacing: 0.12rem;
		text-align: left;
    }

`;
export const Line = styled.div`
@media only screen and (max-width: 800px) {

    position: absolute;
    width: 23rem;
    height: 0;
    left: -0.063rem;
    top: 50%;
    display:fixed;
    border: 0.063rem solid #F2F2F2;
    margin-top: 2.5rem;

}
`;
export const FooterDiv = styled.div`
    display:none;
    @media only screen and (max-width: 800px) {
        display:flex;
        position: absolute;
        margin-top: 5.5rem;
        margin-left: -0.063rem;

    }
`;
export const Nav = styled.nav<{IsOpen:boolean}>`
    align-items: center;
    @media only screen and (max-width: 800px) {
        position: fixed;
		top: 0;
		left: 0;
		height: 40%;
		width: 100%;
		background-color: white;
		transition: 0.5s;
		justify-content: space-between;
        display:${btn=> btn.IsOpen ? "flex":"none"};


`;
export const NavButton = styled.button`
    color:rgba(0, 0, 0, 1);
    display: flex;
    padding: 0.313rem;
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    visibility: hidden;
    opacity: 0;
    font-size: 1.8rem;
    top: 0;
    left: 5%;
    @media only screen and (max-width: 800px) {
        visibility: visible;
		opacity: 1;
        
    }
`;
export const NavCloseButton = styled(NavButton)`
@media only screen and (max-width: 800px) {
    position: absolute;
}

`
export const LogoImage = styled.img<{hideImage:boolean}>`
@media only screen and (max-width: 800px) {
    height: 2.3rem;
    width: 2.3rem;
    border-radius: 0rem;                     
    visibility: ${(image)=> image.hideImage ? 'hidden' : 'visible'}
}
`;
export const LogoClass = styled.div`
    display: flex;
    text-align: center;
    left: 45.6%;
    position: absolute;
    left:45.6%;
    top:0.3rem;
		

    }

`;
export const ResponsiveNav = styled.div`
    @media only screen and (max-width: 800px) {
        transform: none;
    }

`;
export const RightSide = styled.div`
        float:right;
		display: flex;
		flex-direction: row;
        text-align: center;
		gap: 12%;
		position: absolute;
		right: 5%;
		top:0.5rem;

    }
`;
export const Search = styled.button<{hideIcons:boolean}>`
    background: transparent;
    border: none;
    outline: none;
    font-size: 1.8rem;
    display: ${(icon) => icon.hideIcons ? 'none' : 'inline'}

`;
export const LogIn = styled(Search)`
`;
export const Bag = styled(Search)`
`;








