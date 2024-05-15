const initialState ={
    estado: "",
    Solicitud: {
        id: "" ,
        montoSolicitud: "",
        cuentaOrigen: "",
        nombreSolicitud: "",
      },
  }
  
  
  export default function SolicitudFondeoModalReducer(state = initialState, action) {
      if(action.type === 'SolicitudFondeoModalReducer'){
          return {
            ...state,
            estado : action.payload.estado,
            Solicitud: action.payload.Solicitud,

          };
      }
  
      
      return state;
    }