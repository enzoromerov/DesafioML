const estadoInicial = {
  estado: 'cerrado',
  workspace: ''
}
    
export default function DesancladoReducer(state = estadoInicial, accion) {
    if(accion.type === 'abrir-modal-desanclado'){
        return {
          ...state,
          estado : 'abierto',
          workspace : accion.payload 
        };
    }

    if(accion.type === 'cerrar-modal-desanclado'){
      return {
        ...state,
        estado : 'cerrado',
        workspace : ''      };
    }
    
    return state;
  }