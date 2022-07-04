import React from "react";
import { Catalog } from "../../objects/Catalog";
import Navbar from "../Navbar/Navbar";
import './ProductPage.scss';

const ProductPage = (props) => {
	const { category } = props;
	console.log(Catalog[category])
	return (
		<div>
			<Navbar/>
			<div className="ProductPage">
			<h1>{category}</h1>
			<div className="itemGrid">
			{Object.values(Catalog[category]).map(item => {
				return (
					<div>
						<h3>{item.name}</h3>
						<img className="thumbnail" src={item.image}/>
						<h5>{item.price}</h5>
					</div>
				);
			})};
			</div>
		</div>
		</div>
	);
};

export default ProductPage;