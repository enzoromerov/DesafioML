
export default function ErrorLoginModalReducer(state = {estado:""}, accion) {
    if(accion.type === 'modal-ABM'){
        return {
          ...state,
          estado : accion.payload 
        };
    }

    
    return state;
  }