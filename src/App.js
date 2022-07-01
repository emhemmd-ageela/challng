import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "./imges/img1.jpg";
import img2 from "./imges/img2.jpg";
import img3 from "./imges/img3.jpg";
import img4 from "./imges/img4.jpg";

import React from "react";
import NavBar from "./Component/Navbar";
import Cars from "./Component/Cars";
import Footer from "./Component/Footer";

const cars = [
  { name: "bmw", price: 40000, imgsrc: img1 },
  { name: "merseds", price: 100000, imgsrc: img2 },
  { name: "oudi", price: 800000, imgsrc: img3 },
  { name: "ferari", price: 500000, imgsrc: img4 },
];
function App() {
  return (
    <div className="App">
      <NavBar />
      {/*  */}
      {cars.map((e, i) => (
        <Cars e={e} key={i} />
      ))}
      <span>
        {" "}
        total :
        {cars.reduce((accumulator, cars) => {
          return accumulator + cars.price;
        }, 0)}
      </span>

      {/*  */}
      <Footer />
    </div>
  );
}

export default App;
