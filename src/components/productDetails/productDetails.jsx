import React from 'react';
import './productDetails.scss'; 
import { useParams } from 'react-router-dom'; 
import { RiArrowRightWideFill } from "react-icons/ri"; 
import useFetchProductDetails from '../../hooks/useFetchProductDetails';
import useFormatPrice from '../../hooks/useFormatPrice';

function ProductDetails() {
  const { id } = useParams();
  const { categorias, producto, cargando, vendidos } = useFetchProductDetails(id);
  const formatPrice = useFormatPrice();

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
        {categorias.length > 0 && (
          <div className='categories'>
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
      <div className='containerbody'>
        <div className='row1product'>
          <img src={producto.picture} alt={producto.title} /> 
          <div className='block-Item'>
            <div className='block-comprar'>
              <div className='block-cantvendidos'>
                <span>{producto.condition === 'new' ? 'Nuevo' : 'Usado'}</span> - <span>{vendidos} vendidos</span> 
              </div>
            </div>
            <div className='titleItem'>
              <span>{producto.title}</span>
            </div>
            
            {producto && producto.price && ( // Verificación adicional
              <div className='priceItem'>
                <span>{formatPrice(producto.price.amount)}</span>
                {producto.price.decimals === 0 ? (
                  <span className='decimals'> 00 </span>
                ) : (
                  <span className='decimals'> {producto.price.decimals} </span>
                )}
              </div>
            )}
              
            
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