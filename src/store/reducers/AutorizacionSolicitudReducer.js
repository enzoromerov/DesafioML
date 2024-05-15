const estadoInicial = {
  estado: 'cerrado',
  id: '',
  ultimoestado: '',
  
}

export default function AutorizacionSolicitudReducer(state = estadoInicial, accion) {
  if (accion.type === 'abrir-modal-autorizacionSolicitud') {
    return {
      ...state,
      estado: 'abierto',
      id: accion.payload.id,
      ultimoestado: accion.payload.ultimoestado,
      
    }
  }

  if (accion.type === 'cerrar-modal-autorizacionSolicitud') {
    return {
      ...state,
      estado: 'cerrado',
      id: '',
      ultimoestado: '',
      
    }
  }

  return state
}
