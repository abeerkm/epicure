import {  useState } from "react";
import { List, ListA, LogoClass, LogoImage, MenuItems, Nav, NavButton, NavCloseButton, NavHeader, RightSide, Search, LogIn, Bag, Line, FooterDiv, SearchNav, SearchSubject, Login, DishNav, CartOpen, BagContainer, Number } from "./NavElements";
import menu from "../../../images/menu.svg"
import close from "../../../images/close.svg"
import searchicon from "../../../images/search.svg"
import bag from "../../../images/bag.svg"
import user from "../../../images/user.svg"
import logo from "../../../images/about-logo@3x 1.png"
import Footer from "../../Footer/Footer";
import { SearchComponent } from "../../../Components/CommonComponents/CommonComponents";
import { User } from "../../../Components/user/user";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../../Components/user/logout";
import { Link } from "react-router-dom";
import { Cart } from "../../../Components/Cart/Cart";
import { EmptyCart } from "../../../Components/Cart/emptyCart";
import { quantitySum } from "../../../Components/Cart/helpFunctions";
import { setCart } from "../../../pages/Resturants/slicers/cart";
export  function Header() {
	const [IsOpen, setIsOpen] = useState(false);
	const [hideImage, sethideImage] = useState(false);
	const [hideIcons, sethideIcons] = useState(false);
	const [menuItems, setmMenuItems] = useState(false);
	const [search, setSearch] = useState(false);
	const [login, setLogin] = useState(false);
	const orderDetails = useSelector((state: any) => state.orderDetails.value);
	const users = useSelector((state: any) => state.user.value); 
	const cart = useSelector((state: any) => state.cart.value);
	const dispatch=useDispatch();

	

	 const showNavbar = () => {
		hideNavElements();
		setmMenuItems(true);
		setSearch(false);
		setLogin(false);
		dispatch(setCart(false))

	};
	const showSearchbar = () => {
		hideNavElements();
		setSearch(true);
		setmMenuItems(false);
		setLogin(false);
		dispatch(setCart(false))

	};
	const showLogin = () => {
		hideNavElements();
		setSearch(false);
		setmMenuItems(false);
		setLogin(true);
		dispatch(setCart(false))
	};
	const openCart = () => {
		cart? dispatch(setCart(false)):dispatch(setCart(true));
		setSearch(false);
		setmMenuItems(false);
		setLogin(false);
	  };
	
	const hideNavElements = () => {
		IsOpen? setIsOpen(false): setIsOpen(true);
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
			<Login login={login}>
				{users.length===0?<User/>:<Logout/>}
			</Login>
				<Line menuItems={menuItems}/>
				<NavCloseButton 
					title="close"
					onClick={showNavbar}
					src={close}/>
			</Nav>
			<LogoClass>
				<Link to='/'>
				<LogoImage hideImage={hideImage} src={logo} alt="logo" />
				</Link>
				<SearchSubject search={search}>Search</SearchSubject>
			</LogoClass>

			<NavButton title="openMenu" src={menu} onClick={showNavbar}></NavButton>
			<CartOpen cart={cart}>
				{orderDetails.length===0? <EmptyCart/> :<Cart/>}
			</CartOpen>
			<RightSide>
				<Search src={searchicon} hideIcons={hideIcons}  title="search" onClick={showSearchbar}/>
				<LogIn src={user} hideIcons={hideIcons} title="login" onClick={showLogin}/>
				<BagContainer onClick={()=>openCart()}>
					<Bag src={bag} hideIcons={hideIcons} title="bag" />
					<Number qnt={quantitySum(orderDetails)}>{quantitySum(orderDetails)}</Number>
				</BagContainer>
			</RightSide>
		</NavHeader>
	);
}

export default Header;

