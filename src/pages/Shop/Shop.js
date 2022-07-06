import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Catalog } from "../../objects/Catalog";
import './Shop.scss';
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProductPage from "../../components/ProductPage/ProductPage";

const Shop = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="Content">
        <div className="Shop">
          <Sidebar/>
          <div className="Content">
            <ProductPage category={'Flower'}/>
            <ProductPage category={'Concentrate'}/>
            <ProductPage category={'Vape'}/>

          </div>
          {/* <ProductPage category={'Flower'}/>
          <ProductPage category={'Concentrate'}/>
          <ProductPage category={'Vape'} /> */}
        </div>
      </div>
    </div>
  );
};

export default Shop;