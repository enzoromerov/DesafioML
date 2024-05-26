import React, { useState, useEffect } from 'react';
import './productDetails.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import urlBack from '../../utilities/urlBack';
import { RiArrowRightWideFill } from "react-icons/ri";

function ProductDetails() {
  const { id } = useParams();  // Obtener el id de los parámetros de la URL
  const [Categorias, setCategorias] = useState([]);
  const initialState = {
    author: {
      name: "",
      lastname: ""
    },
    item: {
      id: "",
      title: "",
      price: {
        currency: "",
        amount: "",
        decimals: "",
      },
      picture: "",
      condition: "",
      free_shipping: false,
      sold_quantity: "",
      description: "",
    }
  };

  const [Item, setItem] = useState(initialState);

  useEffect(() => {
    if (id) {
      axios.get(`${urlBack}/api/items/${id}`, {
        headers: {
          "Content-Type": "application/json",
          accept: '*/*',
        },
      })
        .then(function (response) {
          console.log(response);
          setCategorias(response.data.categories); // Acceder a las categorías correctamente
          setItem(response.data.item);  // Acceder al objeto item correctamente
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [id]);

  return (
    <div className='productDetails'>
      <div className='contenedorCategories'>
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
      <div className='containerbody'>
        <div className='row1product'>
          <img src={Item.picture} alt={Item.title} /> {/* Asegurarse de que Item tenga los datos necesarios */}
          <div className='block-Item'>
            <div className='block-comprar'>
              <div className='block-cantvendidos'>
                <span>{Item.condition === 'new' ? 'Nuevo' : 'Usado'}</span> - <span>{Item.sold_quantity} vendidos</span> {/* Mostrar la cantidad de vendidos */}
              </div>
            </div>
            <div className='titleItem'>
              <span>{Item.title}</span>
            </div>
            <div className='priceItem'>
              <span>$ {Item.price?.amount}</span> {/* Usar optional chaining para evitar errores si price es undefined */}
            </div>
            <div className='button-comprar'>
              <button>
                <span>Comprar</span>
              </button>
            </div>
          </div>
        </div>
        <div className='title-descripcion'>
          <span>Descripcion del producto</span>
        </div>
        <div className='detalle'>
          <span>{Item.description}</span> {/* Mostrar la descripción del producto */}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;