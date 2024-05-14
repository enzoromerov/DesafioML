export default function ModificarAbmReducer(state = { modificarABM: JSON }, accion) {
  if(accion.type === 'modal-modificar-ABM'){
      return {
        ...state,
        estado : accion.payload.estado,
        idABM: accion.payload.idABM,
        abm: accion.payload.abm,
        idUsuario: accion.payload.idUsuario,
        objeto: accion.payload.objeto,
        subunidad: accion.payload.subunidad
      };
  }

  return state;
}