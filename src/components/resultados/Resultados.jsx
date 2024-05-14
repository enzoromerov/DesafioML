import React from 'react';
import './Resultados.scss';

function Resultados () {
  
  
  return (
    <div className="tablaABM">
        <div>

        </div>

        <div>
            
        </div>

            <div className={TotalPaginas === 1 ? 'd-none' : 'paginator'}>
              <span className={paginaActual === 1 || PaginasActuales.length > 5? 'd-none' : 'page'} style={{ cursor: 'pointer' }}>
                  <p onClick={() => actualizarPaginaActual(1)}>
                  <BiChevronsLeft />
                  </p>
              </span>
              {/* <span className={paginaActual === 1 || PaginasActuales.length > 5? 'd-none' : 'page'} style={{ cursor: 'pointer' }}>
                  <p onClick={() => PaginasAnteriores()}>
                  <BiChevronLeft />
                  </p>
              </span> */}
              {PaginasActuales.map((pagina) => (
                  <span key={pagina} className={paginaActual == pagina ? 'currentPage' : 'page'}>
                  <a onClick={() => actualizarPaginaActual(pagina)}>{pagina}</a>
                  </span>
              ))}
              {/* <span className={TotalPaginas <= 5 ? 'd-none' : 'page'} style={{ cursor: 'pointer' }}>
                  <p onClick={() => PaginasSiguientes()}>
                  <BiChevronRight />
                  </p>
              </span> */}
              <span className={TotalPaginas <= 5 || paginaActual === TotalPaginas ? 'd-none' : 'page'} style={{ cursor: 'pointer' }}>
                  <p onClick={() => actualizarPaginaActual(TotalPaginas)}>
                  <BiChevronsRight />
                  </p>
              </span>
          </div>
    </div>
  );
}
export default Resultados;