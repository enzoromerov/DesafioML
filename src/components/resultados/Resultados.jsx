import React, { useEffect, useState } from "react";
import "./Resultados.scss";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import urlBack from "../../utilities/urlBack";
import { RiArrowRightWideFill } from "react-icons/ri";
import CamionML from "../../assets/camionML.png";
import { useDispatch } from "react-redux";
import SEO from "../../utilities/seo.jsx";

function Resultados() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [resultados, setResultados] = useState({
    categorias: [],
    items: [],
    paginacion: {
      paginaActual: 0,
      totalPaginas: 0,
    },
  });
  const [cargando, setCargando] = useState(true); 

  const { categorias, items, paginacion } = resultados;
  const query = new URLSearchParams(location.search).get("search");




  const obtenerResultados = async () => {
    try {
      const respuesta = await axios.get(
        `${urlBack}/api/items?q=${query}&page=${paginacion.paginaActual}&limit=4`
      );

      setResultados({
        categorias: respuesta.data.categories,
        items: respuesta.data.items,
        paginacion: {
          paginaActual: respuesta.data.pagination?.page || 1,
          totalPaginas: respuesta.data.pagination?.pages || 1,
        },
      });
    } catch (error) {
      console.error("Error al obtener resultados:", error);
    }finally {
      setCargando(false); 
    }
  };


  const handlePageChange = (nuevaPagina) => {
    if (nuevaPagina >= 1 && nuevaPagina <= paginacion.totalPaginas) {
      setResultados((prevResultados) => ({
        ...prevResultados,
        paginacion: {
          ...prevResultados.paginacion,
          paginaActual: nuevaPagina,
        },
      }));
    }
  };

  const goToItemDetails = (id, available_quantity) => {
    dispatch({ type: "CantidadDisponible", payload: available_quantity });

    navigate(`/items/${id}`);
  };

  const formatNumber = (numero) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(numero);
  };

  useEffect(() => {
    if (query) {
      obtenerResultados();
    }
  }, [query, paginacion.paginaActual]);

  if (cargando && query) {
    return <div className="containerResultados">Cargando...</div>;
  }


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
                      <img src={item.picture} alt={item.title} title={item.title}/>
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
      {paginacion.paginaActual !== 0 ? (
        <div className="containerPaginas">
          <button
            onClick={() => handlePageChange(paginacion.paginaActual - 1)}
            disabled={paginacion.paginaActual === 1}
          >
            Anterior
          </button>
          <select
            value={paginacion.paginaActual}
            onChange={(e) => handlePageChange(parseInt(e.target.value, 10))}
          >
            {[...Array(paginacion.totalPaginas).keys()].map((pageNumber) => (
              <option key={pageNumber} value={pageNumber + 1}>
                {pageNumber + 1}
              </option>
            ))}
          </select>
          <button
            onClick={() => handlePageChange(paginacion.paginaActual + 1)}
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
