import { useState } from "react";
import { List, ListA, LogoClass, LogoImage, MenuItems, Nav, NavButton, NavCloseButton, NavHeader, RightSide, Search, LogIn, Bag, Line, FooterDiv } from "./NavElements";
import { FaBars, FaTimes } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { RiShoppingBag2Line } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import logo from "../../images/about-logo@3x 1.png"
import Footer from "../Footer/Footer";

function Header() {
	const [IsOpen, setIsOpen] = useState(false);
	const [hideImage, sethideImage] = useState(false);
	const [hideIcons, sethideIcons] = useState(false);

	const showNavbar = () => {
		if (IsOpen) {
			setIsOpen(false);
			sethideImage(false);
			sethideIcons(false);
		}
		else {
			setIsOpen(true);
			sethideImage(true);
			sethideIcons(true);
		}
	};

	return (
		<NavHeader>
			<Nav IsOpen={IsOpen}>
				<MenuItems>
					<List><ListA href="/#">Resturants</ListA></List>
					<List><ListA href="/#">Chefs</ListA></List>
					<Line/>
					<List><FooterDiv><Footer/></FooterDiv></List>
					
				</MenuItems>


				<NavCloseButton title="close"
					onClick={showNavbar}>
					<FaTimes />
				</NavCloseButton>
			</Nav>
			<LogoClass><LogoImage hideImage={hideImage} src={logo} alt="logo" /></LogoClass>

			<NavButton title="openMenu" onClick={showNavbar}>
				<FaBars />
			</NavButton>
			<RightSide>
				<Search hideIcons={hideIcons} title="search" onClick={showNavbar}>
					<BiSearchAlt />
				</Search>
				<LogIn hideIcons={hideIcons} title="login" onClick={showNavbar}>
					<BsPerson />
				</LogIn>
				<Bag hideIcons={hideIcons} title="bag" onClick={showNavbar}>
					<RiShoppingBag2Line />
				</Bag>
			</RightSide>
		</NavHeader>
	);
}

export default Header;

