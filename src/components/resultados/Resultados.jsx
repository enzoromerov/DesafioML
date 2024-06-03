import React, { useEffect, useState } from "react";
import "./Resultados.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { RiArrowRightWideFill } from "react-icons/ri";
import CamionML from "../../assets/camionML.png";
import { useDispatch } from "react-redux";
import useFetchResults from "../../hooks/useFetchResults";
import useFormatNumber from "../../hooks/useFormatNumber";
import SEO from "../../utilities/seo.jsx";
import  LazyLoad  from "react-lazyload";


function Resultados() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [paginaActual, setPaginaActual] = useState(1);
  const [limite, setLimite] = useState(4)
  const query = new URLSearchParams(location.search).get("search");
  const { resultados, cargando, error } = useFetchResults(query, paginaActual, limite); // Obtenemos handlePageChange del hook
  const { categorias, items, paginacion } = resultados;
  const formatNumber = useFormatNumber();

  // Eliminamos handlePageChange ya que no es necesario en este componente

  const goToItemDetails = (id, available_quantity) => {
    dispatch({ type: "CantidadDisponible", payload: available_quantity });
    navigate(`/items/${id}`);
  };

  if (cargando && query) {
    return <div className="containerResultados">Cargando...</div>;
  }

  const handlePagina = (pagina) => {
    setPaginaActual(pagina);
  };

  return (
    <div className="containerResultados">
      {query !== "" && query !== undefined && <SEO title={`Mercado Libre - Resultados para "${query}"`} description={`Resultados de búsqueda para "${query}" en Mercado Libre`} />}
      <div className="contenedorCategoriesResultados">
        {categorias !== undefined && (
          <div className="categories">
            {categorias.map((category, index) => (
              <span key={index}>
                {index < categorias.length - 1 ? (
                  <>
                    {category} <RiArrowRightWideFill />
                  </>
                ) : (
                  <b>{category}</b>
                )}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="containerbodyResults">
        {items !== undefined ? (
          <div className="containerItems">
            {items.map((item, index) => (
              <div key={index}>
                <div
                  className="item"
                  onClick={() =>
                    goToItemDetails(item.id, item.available_quantity)
                  }
                >
                  <div className="colum1">
                    <div className="row">
                    <LazyLoad>
                      <img src={item.picture} alt={item.title} title={item.title}/>
                      </LazyLoad>
                      <div className="containerTextItem">
                        <div className="row">
                          <div className="price">
                            <span>{formatNumber(item.price?.amount)}</span>
                            {item.free_shipping === true && (
                              <img src={CamionML} alt="envio gratis" title="Envio gratis" />
                            )}
                          </div>
                        </div>
                        <div className="row">
                          <div className="description">
                            <span> {item.title}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column2">
                    <div className="row2">
                      <div className="origen">
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                {index !== items.length - 1 && <hr />}
              </div>
            ))}
          </div>
        ) : (
          <div className="noResults">No hay resultados para tu búsqueda.</div>
        )}
      </div>
      {paginacion.totalPaginas !== 1 ? (
        <div className="containerPaginas">
          <button
            onClick={() => handlePagina(paginacion.paginaActual - 1)}
            disabled={paginacion.paginaActual === 1}
          >
            Anterior
          </button>
          <select
            value={paginacion.paginaActual}
            onChange={(e) => handlePagina(parseInt(e.target.value, 10))}
          >
            {[...Array(paginacion.totalPaginas).keys()].map((pageNumber) => (
              <option key={pageNumber} value={pageNumber + 1}>
                {pageNumber + 1}
              </option>
            ))}
          </select>
          <button
            onClick={() => handlePagina(paginacion.paginaActual + 1)}
            disabled={paginacion.paginaActual === paginacion.totalPaginas}
          >
            Siguiente
          </button>
        </div>
      ) : (
        <div className="noResults"></div>
      )}
    </div>
  );
}

export default Resultados;
