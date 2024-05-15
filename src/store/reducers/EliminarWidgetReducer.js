export default function EliminarWidgetReducer(state = { eliminarWidget: JSON }, accion) {
    if(accion.type === 'modal-eliminar-widget'){
        return {
          ...state,
          estado : accion.payload.estado,
          idWidget: accion.payload.idWidget 
        };
    }

    
    return state;
  }