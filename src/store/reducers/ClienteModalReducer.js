const estadoInicial ={
  estado: 'cerrado',
  subunidad: 'cerrado'
}

      
  export default function ClienteModalReducer(state = estadoInicial, accion) {
      if(accion.type === 'abrir-modal-ClienteModal'){
          return {
            ...state,
            estado : 'abierto',
            subunidad : 'cerrado',
          };
      }
  
      if(accion.type === 'cerrar-modal-ClienteModal'){
        return {
          ...state,
          estado : 'cerrado',
          subunidad : 'cerrado',
          };
      }
      if(accion.type === 'abrir-modal-Subunidad'){
        return {
          ...state,
          estado : 'cerrado',
          subunidad : 'abierto',
          };
      }
      if(accion.type === 'cerrar-modal-Subunidad'){
        return {
          ...state,
          estado : 'cerrado',
          subunidad : 'cerrado',
          };
      }
      
      return state;
    }