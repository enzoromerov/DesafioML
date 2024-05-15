      export default function AlertaModalReducer(state = { AlertaModal: JSON }, accion) {
        if(accion.type === 'AlertaModal'){
            return {
              ...state,
              estado: accion.payload.estado,
              cod: accion.payload.cod,
              descripcion: accion.payload.descripcion
            };
        }
    
        
        return state;
      }