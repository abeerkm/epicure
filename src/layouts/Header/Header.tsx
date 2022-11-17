import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";
import logo from "../../images/about-logo@3x 1.png"

function Header() {
	const navRef:any = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">My work</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<div className="logo"><img src={logo}/></div>

			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Header;
