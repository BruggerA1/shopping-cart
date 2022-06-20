import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss"

const Navbar = () => {
	return (
		<div className="Navbar">
			<div className="LinkContainer">
				<Link to={"/"}>Home</Link>
				<Link to={"/shop"}>Shop</Link>
				<Link to={"/cart"}>Cart</Link>
			</div>
		</div>
	);
};

export default Navbar;