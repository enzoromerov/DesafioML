
const estadoInicial = {
    estado: 'listando',
    filtros: {}
  }
      
  export default function FiltroGeneralReducer(state = estadoInicial, accion) {

      if(accion.type === 'filtrar-fondos-seleccionados'){
        
        if(accion.payload !== ''){
            return {
                ...state,
                estado : 'filtrando',
                filtros : accion.payload 
              };
        } else {
            return {
                ...state,
                estado : 'listando',
                filtros : {}
              };
        }
    
      }
  
      if(accion.type === 'filtrar-eliminar-filtros'){
        return {
            ...state,
            estado : 'listando',
            filtros : {}
          };
      }
      
      return state;
    }