import React, { useEffect, useState } from 'react';
import './Resultados.scss';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import urlBack from '../../utilities/urlBack';
import { RiArrowRightWideFill } from "react-icons/ri"
import CamionML from '../../assets/camionML.png';

function Resultados() {
  const navigate = useNavigate();  // Hook de navegación
  const [Categorias, setCategorias] = useState([]);
  const [Items, setItems] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('search');

  const ItemDetails  = (id) => {
    navigate(`/items/${id}`);
  }

  useEffect(() => {
    if (query) {
      axios.get(urlBack + '/api/items?q=' + query,
        {
          headers: {
            "Content-Type": "application/json",
            accept: '*/*',
          },
        },
      )
      .then(function (response) {
        console.log(response);
        setCategorias(response.data.categories)
        setItems(response.data.items)
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }, [query]);

  return (
    <div className="containerResultados">
      <div className='contenedorCategoriesResultados'>
      {Categorias.length > 0 && (
          <div className='categories'>
            {Categorias.map((category, index) => (
              <span key={index}>
                {index < Categorias.length - 1 ? (
                  <>
                    {category}
                    <RiArrowRightWideFill />
                  </>
                ) : (
                  <b>{category}</b>
                )}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className='containerbodyResults'>
        {Items.length > 0 ? (
          <div className='containerItems'>
            {Items.map((item, index) => (
              <div key={index}>
                <div className="item">
                  <div className='colum1'>
                    <div className='row'>
                      <img src={item.picture} alt={item.title} onClick={() => ItemDetails(item.id)}/>
                      <div className='containerTextItem'>
                        <div className='row'>
                          <div className='price'>
                            <span>  $ 1980 </span>
                            {item.free_shipping === true && <img src={CamionML} alt="envio gratis" /> }
                          </div>
                        </div>
                        <div className='row'>
                          <div className='description'>
                            <span>{item.title}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='column2'>
                    <div className='row2'>
                      <div className='origen'>
                        <span> {item.location} </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Añadir la línea separadora después de cada elemento item */}
                {index !== Items.length - 1 && <hr />}
              </div>
            ))}
          </div>
        ) : (
          <div className="noResults">No se encontraron resultados para "{query}"</div>
        )}
      </div>
    </div>
  );
}

export default Resultados;