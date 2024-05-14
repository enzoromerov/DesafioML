import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { useSelector } from "react-redux";
import axios from "axios";
import LogoMELI from '../../assets/MELI-logo.png';


const navbar = () => {
  const token = useSelector((state) => state.TokenAccess)

  return (
    <div className="navbar">
        <div className="container">
          <div className="logo">
            <img src={LogoMELI} alt="Logo de Mercado Libre" />
          </div>
          <div className="buscar">
            <input type="text" placeholder="Nunca dejes de buscar"/>
          </div>
        </div>
    </div>
  );
};
export default navbar;