const estadoInicial = {
    estado: 'cerrado',
    workspace: ''
  }
      
  export default function ElminarWorkSpaceModalReducer(state = estadoInicial, accion) {

    if(accion.type === 'abrir-modal-eliminarWorkspace'){
        return {
          ...state,
          estado : 'abierto',
          workspace : accion.payload 
        };
    }
      if(accion.type === 'cerrar-modal-eliminarWorkspace'){
        return {
          ...state,
          estado : 'cerrado',
          workspace : ''      };
      }
      return state;
    }