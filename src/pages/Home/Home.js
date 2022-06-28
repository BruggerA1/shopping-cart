import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import './Home.scss';
import { Catalog } from "../../objects/Catalog";

const Home = () => {
  console.log(Catalog)
  return (
    <div className="App">
      <Navbar />
      <div className="Content">
        <div className="Home">
          <img src={Catalog.concentrates[2]}/>
        </div>
      </div>
    </div>
  );
};

export default Home;