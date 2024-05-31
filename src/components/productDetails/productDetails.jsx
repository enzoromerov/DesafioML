import React, { useState, useEffect } from 'react';
import './productDetails.scss'; 
import axios from 'axios'; 
import { useParams } from 'react-router-dom'; 
import urlBack from '../../utilities/urlBack'; 
import { RiArrowRightWideFill } from "react-icons/ri"; 
import { useSelector } from "react-redux"; 
import SEO from "../../utilities/seo.jsx"
import LazyLoad from 'react-lazyload';

function ProductDetails() {
  
  const CantidadDisponible = useSelector(state => state.CantidadDisponible);
  const [Vendidos, setVendidos] = useState(""); 


  const { id } = useParams(); 
  const [Categorias, setCategorias] = useState([]); 
  const [producto, setProducto] = useState(null); 
  const [cargando, setCargando] = useState(true); 

  useEffect(() => {
    
    const obtenerProducto = async () => {
      const cachedData = localStorage.getItem(`producto_${id}`);
      if (cachedData) {
        setProducto(JSON.parse(cachedData));
        setCargando(false);
      } else {
        try {
          const respuesta = await axios.get(`${urlBack}/api/items/${id}`, {
            headers: { "Content-Type": "application/json", accept: '*/*' },
          });

          setCategorias(respuesta.data.categories);
          setProducto(respuesta.data.item);

          const vendidos = CantidadDisponible
            ? respuesta.data.item.sold_quantity - CantidadDisponible.CantidadDisponible
            : respuesta.data.item.sold_quantity;

          setVendidos(vendidos);

          localStorage.setItem(`producto_${id}`, JSON.stringify(respuesta.data.item));
        } catch (error) {
          console.error("Error al obtener el producto:", error);
        } finally {
          setCargando(false);
        }
      }
    };

    if (id) {
      obtenerProducto(); 
    }
  }, [id, CantidadDisponible]);

  
  const formatPrice = (amount, decimals) => {
    const formatter = new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: decimals === 0 ? 2 : 0, 
      maximumFractionDigits: 0, 
    });
    return formatter.format(amount);
  };


  if (cargando) {
    return <div className="productDetails">Cargando...</div>;
  }

  if (!producto) {
    return (
      <div className="productDetails">
        <p>Hubo un error al cargar el producto.</p>
      </div>
    );
  }

  return (
    <div className='productDetails'>
      {producto && <SEO title={`${producto.title} - Mercado Libre`} description={`Compra ${producto.title} en Mercado Libre`} />}
      <div className='contenedorCategories'>
        {Categorias.length > 0 && (
          <div className='categories'>
            {Categorias.map((category, index) => (
              <span key={index}>
                {index < Categorias.length - 1 ? (
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
      <div className='containerbody'>
        <div className='row1product'>
          <LazyLoad> 
          <img src={producto.picture} alt={producto.title} /> 
          </LazyLoad> 
          <div className='block-Item'>
            <div className='block-comprar'>
              <div className='block-cantvendidos'>
                <span>{producto.condition === 'new' ? 'Nuevo' : 'Usado'}</span> - <span>{Vendidos} vendidos</span> 
              </div>
            </div>
            <div className='titleItem'>
              <span>{producto.title}</span>
            </div>
            <div className='priceItem'>
              <span>{formatPrice(producto.price?.amount)}</span>
              {producto.price.decimals == 0 ? <span className='decimals'> 00 </span> : <span className='decimals'> {producto.price.decimals} </span>}
              
            </div>
            <div className='button-comprar'>
              <button>
                <span>Comprar</span>
              </button>
            </div>
          </div>
        </div>
        <div className='title-descripcion'>
          <span>Descripción del producto</span>
        </div>
        <div className='detalle'>
          <span>{producto.description}</span> 
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;  