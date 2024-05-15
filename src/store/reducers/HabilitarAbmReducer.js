export default function HabilitarAbmReducer(state = { habilitarABM: JSON }, accion) {
    if(accion.type === 'modal-habilitar-ABM'){
      return {
        ...state,
        estado : accion.payload.estado,
        idABM: accion.payload.idABM,
        abm: accion.payload.abm
      };
  }
    
    return state;
  }