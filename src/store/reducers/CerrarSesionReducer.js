
      
  export default function CerrarSesionReducer(state = {estado:""}, accion) {
      if(accion.type === 'modal-cerrarsesion'){
          return {
            ...state,
            estado : accion.payload 
          };
      }

      
      return state;
    }