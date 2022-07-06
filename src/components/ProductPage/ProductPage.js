import React from "react";
import { Catalog } from "../../objects/Catalog";
import Navbar from "../Navbar/Navbar";
import './ProductPage.scss';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const ProductPage = (props) => {
	let { id } = useParams();
	const category = (id== null) ? props.category : id
	console.log(id)
	return (
		<div>
			<div className="ProductPage">
				<h1>{category}</h1>
				{ (id != null) ? <Link to={'/shop'}>Back</Link> : null }
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