import React, { useState, useEffect } from 'react';
import './productDetails.scss'; // Importa los estilos CSS para este componente
import axios from 'axios'; // Para hacer peticiones HTTP
import { useParams } from 'react-router-dom'; // Para obtener el ID del producto de la URL
import urlBack from '../../utilities/urlBack'; // URL base de tu backend
import { RiArrowRightWideFill } from "react-icons/ri"; // Ícono de flecha
import { useSelector } from "react-redux"; // Para acceder al estado global (Redux)

function ProductDetails() {
  // Obtiene la cantidad disponible del estado global (Redux)
  const CantidadDisponible = useSelector(state => state.CantidadDisponible);
  const [Vendidos, setVendidos] = useState(""); // Estado para la cantidad de vendidos

  // Obtiene el ID del producto de la URL
  const { id } = useParams(); 
  const [Categorias, setCategorias] = useState([]); // Estado para las categorías
  const [producto, setProducto] = useState(null); // Estado para el producto completo
  const [cargando, setCargando] = useState(true); // Estado para indicar si está cargando

  useEffect(() => {
    // Función para obtener los detalles del producto
    const obtenerProducto = async () => {
      try {
        const respuesta = await axios.get(`${urlBack}/api/items/${id}`, {
          headers: { "Content-Type": "application/json", accept: '*/*' },
        });

        setCategorias(respuesta.data.categories); // Guarda las categorías
        setProducto(respuesta.data.item); // Guarda el producto

        // Calcula la cantidad de vendidos (si hay datos de CantidadDisponible)
        const vendidos = CantidadDisponible 
          ? respuesta.data.item.sold_quantity - CantidadDisponible.CantidadDisponible 
          : respuesta.data.item.sold_quantity;

        setVendidos(vendidos); 
      } catch (error) {
        console.error("Error al obtener el producto:", error);
        // Aquí puedes agregar lógica para mostrar un mensaje de error al usuario
      } finally {
        setCargando(false); // Termina la carga, incluso si hay un error
      }
    };

    if (id) {
      obtenerProducto(); // Llama a la función si hay un ID válido
    }
  }, [id, CantidadDisponible]); // Vuelve a ejecutar el efecto si el ID o CantidadDisponible cambian

  // Función para formatear el precio
  const formatPrice = (amount, decimals) => {
    const formatter = new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: decimals === 0 ? 2 : 0, // Mostrar 2 decimales si es 0
      maximumFractionDigits: 2, 
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
          <img src={producto.picture} alt={producto.title} /> 
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