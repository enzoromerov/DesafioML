import React from "react";
import "./navbar.scss";

import LogoMELI from "../../assets/MELI-logo.png";

import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import useInputState from "../../hooks/useInputState";

const Navbar = () => {
  const navigate = useNavigate();
  const { value: Item, handleChange } = useInputState("");

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
    navigate(`/items?search=${Item}`);
  };

  const returnHome = () => {
    navigate(`/`);
  };

  return (
    <div className="navbar">
      <div className="containerNavbar">
        <div className="logo">
          <img
            src={LogoMELI}
            data-testid="logo"
            alt="Logo de Mercado Libre"
            title="Mercado Libre"
            onClick={returnHome}
          />
        </div>
        <div className="buscar">
          <input
            type="text"
            placeholder="Nunca dejes de buscar"
            data-testid="search-input"
            onChange={handleChange}
            value={Item}
            onKeyDown={handleKeyDown}
          />
          <span
            onClick={buscarElemento}
            data-testid="search"
            alt="buscar"
            name="Buscar"
          >
            <IoIosSearch />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Navbar;