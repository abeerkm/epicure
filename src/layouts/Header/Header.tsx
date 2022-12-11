import { useState } from "react";
import { List, ListA, LogoClass, LogoImage, MenuItems, Nav, NavButton, NavCloseButton, NavHeader, RightSide, Search, LogIn, Bag, Line, FooterDiv, SearchNav, SearchSubject } from "./NavElements";
import { FaBars, FaTimes } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { RiShoppingBag2Line } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
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
					<List><ListA href="/#">Resturants</ListA></List>
					<List><ListA href="/#">Chefs</ListA></List>
					<List><FooterDiv><Footer/></FooterDiv></List>
				</MenuItems>
			<SearchNav search={search}>
				<SearchComponent></SearchComponent>
			</SearchNav>
				<Line menuItems={menuItems}/>
				<NavCloseButton title="close"
					onClick={showNavbar}>
					<FaTimes />
				</NavCloseButton>
			</Nav>
			<LogoClass>
				<LogoImage hideImage={hideImage} src={logo} alt="logo" />
				<SearchSubject search={search}>Search</SearchSubject>
			</LogoClass>

			<NavButton title="openMenu" onClick={showNavbar}>
				<FaBars />
			</NavButton>
			<RightSide>
				<Search hideIcons={hideIcons}  title="search" onClick={showSearchbar}>
					<BiSearchAlt />
				</Search>
				<LogIn hideIcons={hideIcons} title="login">
					<BsPerson />
				</LogIn>
				<Bag hideIcons={hideIcons} title="bag">
					<RiShoppingBag2Line />
				</Bag>
			</RightSide>
		</NavHeader>
	);
}

export default Header;

