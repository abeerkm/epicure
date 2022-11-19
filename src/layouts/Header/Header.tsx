import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {BiSearchAlt} from "react-icons/bi";
import {RiShoppingBag2Line} from "react-icons/ri";
import {BsPerson} from "react-icons/bs";
import "./Header.css";
import logo from "../../images/about-logo@3x 1.png"
import login from "../../images/login.png";

function Header() {
	const navRef = useRef<HTMLDivElement>(null);
	const [hideimage,sethideimage]=useState(true);
	const [hideicons,sethideicons]=useState(true);

	const showNavbar = () => {
		const node = navRef.current;
		node?.classList.toggle("responsive_nav");
		hideimage? sethideimage(false):sethideimage(true);
	};

	return (
		<header>
			<nav ref={navRef}>
				<ul className="menuItems">
					<li><a href="/#">Resturants</a></li>
					<li><a href="/#">Chefs</a></li>
				</ul>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<div className="logo"><img className={hideimage ? "logoimage" : "hideimage"} src={logo} alt="logo"/></div>

			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
			<div className="rightside">
				<button className="search" onClick={showNavbar}>
					<BiSearchAlt />
				</button>
				<button className="login" onClick={showNavbar}>
					<BsPerson />
				</button>				
				<button className="bag" onClick={showNavbar}>
					<RiShoppingBag2Line />
				</button>
			</div>
		</header>
	);
}

export default Header;
