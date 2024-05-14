const estadoInicial = {
  estado: 'cerrado',
  workspace: ''
}
    
export default function AncladoReducer(state = estadoInicial, accion) {
    if(accion.type === 'abrir-modal-anclado'){
        return {
          ...state,
          estado : 'abierto',
          workspace : accion.payload 
        };
    }

    if(accion.type === 'cerrar-modal-anclado'){
      return {
        ...state,
        estado : 'cerrado',
        workspace : ''      };
    }
    
    return state;
  }