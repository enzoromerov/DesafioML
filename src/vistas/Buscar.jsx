import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProductDetails from '../components/productDetails/ProductDetails';
import Resultados from '../components/resultados/Resultados';
import E400 from '../components/errores/E400';
import E404 from '../components/errores/E404';
import E408 from '../components/errores/E408';
import "./Buscar.scss";
import Navbar from '../components/navbar/navbar'

const Buscar = () => {

  useEffect(() => {
    
  }, []);
  
    return (
        <div className="App">
        <Navbar></Navbar>
          <div className="container">
          <Resultados />
            <Routes>
              <Route path="/*" />
              <Route path="/items?search=" element={<Resultados />} />
              <Route path="/items/" element={<ProductDetails />} />              
              <Route path="/400" element={<E400 />} />
              <Route path="/404" element={<E404 />} />
              <Route path="/408" element={<E408 />} />
            </Routes>
          </div>
   
  
      </div>
    );
  };
  export default Buscar;