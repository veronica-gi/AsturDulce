import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/styles.css";

const Home = () => {
  return (
    <div>
      <Header/>
      <h1>Bienvenida a AsturDulce</h1>
      <p>Proyecto inicial con React y Vite.</p>
      <Footer/>
    </div>
  );
};

export default Home;
