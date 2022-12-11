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
export const MenuItems = styled.ul<{menuItems:boolean}>`
    display: inline-block;
    justify-content: space-between;
    position: absolute;
    list-style-type: none;
    top:1rem;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
        gap: 1.5rem;
        margin-left: 1.5rem;
        display: flex;
        margin-top:4rem;
        display:${btn=> btn.menuItems ? "flex":"none"};


        
    }
`;

export const List = styled.li`
`;
export const ListA = styled.a`
    color: rgba(0, 0, 0, 1);
    text-decoration: none;
    @media only screen and (max-width: 600px) {
        font-size: 1.125rem;
		font-weight: 200;
		line-height: 1.375rem;
		letter-spacing: 0.12rem;
		text-align: left;
    }

`;
export const SearchComponent = styled.div`
    margin-top:5rem;
`; 
export const Line = styled.div<{menuItems:boolean}>`
@media only screen and (max-width: 600px) {

    position: absolute;
    width: 100%;
    height: 0;
    left: -0.063rem;
    border: 0.063rem solid #F2F2F2;
    top:50%;
    display:${btn=> btn.menuItems ? "flex":"none"};


}
`;
export const FooterDiv = styled.div`
    display:none;
    @media only screen and (max-width: 600px) {
        display:flex;
        position: absolute;
        margin-top: -40rem;
        margin-left: -0.063rem;
        font-size: 1.125rem;
		font-weight: 200;
		line-height: 1.375rem;
		letter-spacing: 0.12rem;
        

    }
`;
export const Nav = styled.nav<{IsOpen:boolean}>`
    align-items: center;
    @media only screen and (max-width: 600px) {
        position: fixed;
		top: 0;
		left: 0;
		height: 23.9rem;
		width: 100%;
		background-color: white;
		transition: 0.5s;
		justify-content: space-between;
        z-index:99;
        display:${btn=> btn.IsOpen ? "flex":"none"};

`;

export const SearchNav = styled.div<{search:boolean}>`
    display:${btn=> btn.search ? "flex":"none"};
    align-items: center;
    padding: 0px 40px;
    padding-bottom: 80%;


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
    @media only screen and (max-width: 600px) {
        visibility: visible;
		opacity: 1;
        
    }
`;
export const NavCloseButton = styled(NavButton)`
@media only screen and (max-width: 600px) {
    position: absolute;
}

`
export const LogoImage = styled.img<{hideImage:boolean}>`
@media only screen and (max-width: 600px) {
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
export const SearchSubject = styled.h1<{search:boolean}>`
    position: absolute;
    width: 3.4rem;
    height: 1.375rem;
    padding-top:20%;

    font-style: normal;
    font-weight: 200;
    font-size: 1.125rem;
    line-height: 1.375rem;
    z-index:99;
    visibility: ${(word)=> word.search ? 'visible' : 'hidden'}

`;

export const ResponsiveNav = styled.div`
    @media only screen and (max-width: 600px) {
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








