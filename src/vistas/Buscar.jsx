import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ProductDetails from '../components/productDetails/productDetails.jsx';
import Resultados from '../components/resultados/Resultados';
import E400 from '../components/errores/E400';
import E404 from '../components/errores/E404';
import E408 from '../components/errores/E408';
import "./Buscar.scss";
import Navbar from '../components/navbar/navbar';
import { useSelector } from "react-redux";

const Buscar = () => {
  const navigate = useNavigate();
  const Item = useSelector((state) => state.ItemName);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Resultados />} />
          <Route path="/items" element={<Resultados />} />
          <Route path="/items/:id" element={<ProductDetails />} />  
          <Route path="/400" element={<E400 />} />
          <Route path="/404" element={<E404 />} />
          <Route path="/408" element={<E408 />} />
        </Routes>
      </div>
    </div>
  );
};

export default Buscar;