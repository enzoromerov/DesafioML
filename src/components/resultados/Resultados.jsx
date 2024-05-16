import React from 'react';
import './Resultados.scss';

function Resultados () {
  
  
  return (
    <div className="containerResultados">
        <div className='contenedorCategories'>
            <div className='categories'>
                <span><b>Apple</b>  Apple</span>
            </div>
        </div>
        <div className='containerbody'>
            <div className='containerItems'>
                <div className='item'>
                    <div className='colum1'>
                        <div className='row'> 

                            <img src="" alt="" />

                            <div className='containerTextItem'>
                                <div className='row'>
                                    <div className='price'>

                                        <span>  $ 1980 </span>

                                        <img src="" alt="" />

                                    </div>                                    
                                </div>
                                <div className='row'>
                                    <div className='description'>

                                        <span>
                                            Apple Ipod Touch 5g 16gb Negro Igual A Nuevo Completo Unico!
                                        </span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='column2'>
                        <div className='row2'>
                            <div className='origen'>
                                    <span> Mendoza </span>
                            </div>
                        </div>
                    </div>

                </div>           
            </div>
        </div>           
    </div>
  );
}
export default Resultados;