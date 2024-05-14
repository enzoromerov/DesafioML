const initialState ={
  estado: "",
  idSolicitud: "vacio",
}


export default function InfoSolicitudReducer(state = initialState, action) {
    if(action.type === 'modal-InfoSolicitudReducer'){
        return {
          ...state,
          estado : action.payload.estado,
          idSolicitud: action.payload.idSolicitud
        };
    }

    
    return state;
  }