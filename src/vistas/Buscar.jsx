import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductDetails from '../components/productDetails/productDetails.jsx';
import Resultados from '../components/resultados/Resultados';
import "./Buscar.scss";
import Navbar from '../components/navbar/navbar';
import SEO from "../utilities/seo.jsx"

const Buscar=()=>{


  return (
    <div className="App">
      <SEO title="Mercado Libre - Busca todo lo que necesites" description="Encontrá productos, marcas y más en Mercado Libre" />
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Resultados />} />
          <Route path="/items" element={<Resultados />} />
          <Route path="/items/:id" element={<ProductDetails />} />  
        </Routes>
      </div>
    </div>
  );
};

export default Buscar;