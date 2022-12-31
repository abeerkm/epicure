import { useState } from "react";
import { List, ListA, LogoClass, LogoImage, MenuItems, Nav, NavButton, NavCloseButton, NavHeader, RightSide, Search, LogIn, Bag, Line, FooterDiv, SearchNav, SearchSubject } from "./NavElements";
import menu from "../../images/menu.svg"
import close from "../../images/close.svg"
import searchicon from "../../images/search.svg"
import bag from "../../images/bag.svg"
import user from "../../images/user.svg"

import logo from "../../images/about-logo@3x 1.png"
import Footer from "../Footer/Footer";
import { SearchComponent } from "../../Components/CommonComponents/CommonComponents";

function Header() {
	const [IsOpen, setIsOpen] = useState(false);
	const [hideImage, sethideImage] = useState(false);
	const [hideIcons, sethideIcons] = useState(false);
	const [menuItems, setmMenuItems] = useState(false);
	const [search, setSearch] = useState(false);



	const showNavbar = () => {
		IsOpen? setIsOpen(false): setIsOpen(true);
		setmMenuItems(true);
		setSearch(false);
		hideNavElements();
	};
	const showSearchbar = () => {
		IsOpen? setIsOpen(false): setIsOpen(true);
		setSearch(true);
		setmMenuItems(false);
		hideNavElements();
	};
	const hideNavElements = () => {
		if (IsOpen) {
			sethideImage(false);
			sethideIcons(false);
		}
		else {
			sethideImage(true);
			sethideIcons(true);
		}

	};

	return (
		<NavHeader>
			<Nav IsOpen={IsOpen}>
				<MenuItems menuItems={menuItems}>
					<List><ListA href="/Resturants">Resturants</ListA></List>
					<List><ListA href="/#">Chefs</ListA></List>
					<List><FooterDiv><Footer/></FooterDiv></List>
				</MenuItems>
			<SearchNav search={search}>
				<SearchComponent></SearchComponent>
			</SearchNav>
				<Line menuItems={menuItems}/>
				<NavCloseButton 
					title="close"
					onClick={showNavbar}
					src={close}/>
			</Nav>
			<LogoClass>
				<LogoImage hideImage={hideImage} src={logo} alt="logo" />
				<SearchSubject search={search}>Search</SearchSubject>
			</LogoClass>

			<NavButton title="openMenu" src={menu} onClick={showNavbar}>
				
			</NavButton>
			<RightSide>
			<Search src={searchicon} hideIcons={hideIcons}  title="search" onClick={showSearchbar}>
				</Search>
				<LogIn src={user} hideIcons={hideIcons} title="login">
					
				</LogIn>
				<Bag src={bag} hideIcons={hideIcons} title="bag">
					
				</Bag>
			</RightSide>
		</NavHeader>
	);
}

export default Header;

