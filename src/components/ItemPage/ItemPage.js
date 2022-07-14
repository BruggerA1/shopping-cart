import React from "react";
import { Link, useParams } from "react-router-dom";
import { Catalog } from "../../objects/Catalog";
import { Product } from "../../objects/Product";
import Navbar from "../Navbar/Navbar";
import './ItemPage.scss';

const ItemPage = () => {
	const { cat, id } = useParams();
	const category = Object.values(Catalog[cat]);
	const product = category.filter(item => item.name == id)[0];
	const item = Product(product.name, product.price, product.category, product.image);
	return (
		<div className="ItemPage">
			<Navbar/>
			<h1>{item.name}</h1>
			<img className="thumbnail" src={item.image}/>
			<h2>{item.price}</h2>
			<Link className="backButton" to={`/shop/${cat}`}>Back</Link>
		</div>
	);
};

export default ItemPage