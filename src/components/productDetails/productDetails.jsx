import React from 'react';
import './productDetails.scss';


function ProductDetails () {
  
  
  return (
    <div className='productDetails'>
      <div className='contenedorCategories'>
            <div className='categories'>
                <span><b>Apple</b>  Apple</span>
            </div>
      </div>
      <div className='containerbody'>
        <div className='row1product'>
          <img src="" alt="" />
          
          <div className='block-Item'>
          <div className='block-comprar'>
            <div className='block-cantvendidos'>
                <span >Nuevo</span> - <span>234 vendidos</span>
                

            </div>
          </div>
          <div className='titleItem'>
            <span>Deco Reverse Sombrero Oxford</span>
          </div>
          <div className='priceItem'>
            <span>$ 1.980</span>
          </div>
          <div className='button-comprar'>
              <button >
                <span>Comprar</span>
                </button>
          </div>
          </div>

        </div>

        

          <div className='title-descripcion'>
            <span>Descripcion del producto</span>
          </div>

          <div className='detalle'>
            <span>
            Lorem ipsum dolor sit amet, consectetur
             adipiscing elit. Cras mollis tellus non u
             rna interdum venenatis. Duis mollis velit 
             a lacus lobortis laoreet. Mauris leo tellus,
              tempus eget augue eget, ornare pharetra lorem
              . Nunc ut diam aliquet, mattis ex ullamcorper, co
              nsectetur arcu. Class aptent taciti sociosqu ad litora 
              torquent per conubia nostra, per inceptos himena
              eos. Nulla ullamcorper sed risus quis varius. Vestib
              ulum mi nunc, venenatis in leo in, ullamcorper 
              mattis elit.
            </span>
          </div>

        
      </div>
     
    </div>
  );
}
export default ProductDetails;