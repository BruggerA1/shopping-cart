import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import './Home.scss'
import importAVIF from "../../utilities/importAVIF";
const Home = () => {
  const avif = importAVIF();
  console.log(avif);
  return (
    <div className="App">
      <Navbar />
      <div className="Content">
        <div className="Home">
          {avif.map(img => {
            return <img src={img}/>
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;