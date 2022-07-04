import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Catalog } from "../../objects/Catalog";
import './Shop.scss';
import { Link } from "react-router-dom";
import ProductPage from "../../components/ProductPage/ProductPage";

const Shop = (props) => {
  return (
    <div className="App">
      <Navbar />
      <div className="Content">
        <div className="Shop">
        <Link to={'/shop/flower'}>ClickIt</Link>
          {/* <ProductPage category={'Flower'}/>
          <ProductPage category={'Concentrate'}/>
          <ProductPage category={'Vape'} /> */}
        </div>
      </div>
    </div>
  );
};

export default Shop;