export default function EliminarAbmReducer(state = { eliminarABM: JSON }, accion) {
    if(accion.type === 'modal-eliminar-ABM'){
        return {
          ...state,
          estado : accion.payload.estado,
          idABM: accion.payload.idABM,
          abm: accion.payload.abm
        };
    }

    return state;
  }