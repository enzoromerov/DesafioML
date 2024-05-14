
export default function ErrorLoginModalReducer(state = {estado:""}, accion) {
    if(accion.type === 'modal-ErrorLogin'){
        return {
          ...state,
          estado : accion.payload 
        };
    }

    
    return state;
  }