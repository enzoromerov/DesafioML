const estadoInicial = {
  estado: 'cerrado',
  workspace: ''
}
    
export default function FiltroModalMSPReducer(state = estadoInicial, accion) {
    if(accion.type === 'abrir-modal-FiltroModalMSP'){
        return {
          ...state,
          estado : 'abierto',
          workspace : accion.payload 
        };
    }

    if(accion.type === 'cerrar-modal-FiltroModalMSP'){
      return {
        ...state,
        estado : 'cerrado',
        workspace : ''      };
    }
    
    return state;
  }