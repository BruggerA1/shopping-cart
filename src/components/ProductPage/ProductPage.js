import React from "react";
import { Catalog } from "../../objects/Catalog";
import Navbar from "../Navbar/Navbar";
import './ProductPage.scss';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductPage = (props) => {
	let { id } = useParams();
	const category = (id == null) ? props.category : id;
	const products = Catalog[category];
	const navBar = (() => {
		if (id != null)
			return (<Navbar />)
	})();
	const backButton = (() => {
		if (id != null)
			return (<Link to={'/shop'}>Back</Link>)
	})();

	return (
		<div>
			<div className="ProductPage">
				{navBar}
				<h1>{category}</h1>
				{backButton}
				<div className="itemGrid">
					{products.map(item => {
						return (
							<Link to={`/shop/${category}/${item.name}`}>
								<h3>{item.name}</h3>
								<img className="thumbnail" src={item.image} />
								<h5>{item.price}</h5>
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ProductPage;