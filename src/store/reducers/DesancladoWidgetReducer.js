const estadoInicial = {
    estado: 'cerrado',
    workspace: ''
  }
      
  export default function DesancladoWidgetReducer(state = estadoInicial, accion) {
      if(accion.type === 'abrir-modal-desancladowidget'){
          return {
            ...state,
            estado : 'abierto',
            workspace : accion.payload 
          };
      }
  
      if(accion.type === 'cerrar-modal-desancladowidget'){
        return {
          ...state,
          estado : 'cerrado',
          workspace : ''      };
      }
      
      return state;
    }