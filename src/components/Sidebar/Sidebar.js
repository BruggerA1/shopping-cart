import React from "react";
import { Link } from "react-router-dom";
import './Sidebar.scss'

const Sidebar = () => {
	return (
		<div className="Sidebar">
			<Link to={'/shop/Flower'}>Flower</Link>
			<Link to={'/shop/Concentrate'}>Concentrate</Link>
			<Link to={'/shop/Vape'}>Vape</Link>
		</div>
	);
};

export default Sidebar;