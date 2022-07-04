import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Catalog } from "../../objects/Catalog";
import './Shop.scss';

const Shop = () => {

  return (
    <div className="App">
      <Navbar />
      <div className="Content">
        <div className="Shop">
          <div className="Flower">
            <h1>Flower</h1>
            <div className="itemGrid">
              {Object.values(Catalog.flower).map(item => {
                return (
                  <div>
                    <h3>{item.name}</h3>
                    <img className="thumbnail" src={item.image}/>
                    <h5>{item.price}</h5>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h1>Concentrates</h1>
            <div className="itemGrid">
              {Object.values(Catalog.concentrates).map(item => {
                return (
                  <div>
                    <h3>{item.name}</h3>
                    <img className="thumbnail" src={item.image}/>
                    <h5>{item.price}</h5>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h1>Vape</h1>
            <div className="itemGrid">
              {Object.values(Catalog.vape).map(item => {
                return (
                  <div>
                    <h3>{item.name}</h3>
                    <img className="thumbnail" src={item.image}/>
                    <h5>{item.price}</h5>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;