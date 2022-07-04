import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import './Home.scss';
import { Catalog } from "../../objects/Catalog";

const Home = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="Content">
        <div className="Home">
          Home
        </div>
      </div>
    </div>
  );
};

export default Home;