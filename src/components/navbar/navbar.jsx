import React, { useState } from "react";
import "./navbar.scss";

import LogoMELI from "../../assets/MELI-logo.png";

import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const initialState = "";
  const [Item, setItem] = useState(initialState);

  const handleChange = (e) => {
    const { value } = e.target;
    setItem(value);
    console.log(Item);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      buscarElemento();
    }
  };

  const buscarElemento = () => {
    if (!Item) {
      console.log("El campo de búsqueda está vacío.");
      return;
    }
    console.log(Item);

    navigate(`/items?search=${Item}`);
  };

  const returnHome = () => {

    navigate(`/`);

  }

  
  return (
    <div className="navbar">
      <div className="containerNavbar">
        <div className="logo">
          <img src={LogoMELI} alt="Logo de Mercado Libre" title="Mercado Libre" onClick={returnHome}/>
        </div>
        <div className="buscar">
          <input
            type="text"
            placeholder="Nunca dejes de buscar"
            onChange={handleChange}
            value={Item}
            onKeyDown={handleKeyDown}
          />
          <span onClick={buscarElemento} alt="buscar" title="Buscar">
            <IoIosSearch />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
