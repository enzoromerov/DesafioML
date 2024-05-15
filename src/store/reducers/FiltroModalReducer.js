const estadoInicial = {
  estado: 'cerrado',
  workspace: '',
  estadoMovimientos: 'cerrado',
  estadoBuscarSolicitudes: 'cerrado',
}
    
export default function FiltroModalReducer(state = estadoInicial, accion) {
    if(accion.type === 'abrir-modal-filtroModal'){
        return {
          ...state,
          estado : 'abierto',
          workspace : accion.payload,
          estadoMovimientos: 'cerrado',
          estadoBuscarSolicitudes: 'cerrado',
        };
    }

    if(accion.type === 'cerrar-modal-filtroModal'){
      return {
        ...state,
        estado : 'cerrado',
        workspace : '',
        estadoMovimientos: 'cerrado',
        estadoBuscarSolicitudes: 'cerrado',
      };
    }
    if(accion.type === 'abrir-modal-filtroModalMovimientos'){
      return {
        ...state,
        estado : 'cerrado',
        workspace : accion.payload,
        estadoMovimientos: 'abierto',
        estadoBuscarSolicitudes: 'cerrado',
      };
  }

  if(accion.type === 'cerrar-modal-filtroModalMovimientos'){
    return {
      ...state,
      estado : 'cerrado',
      workspace : '',
      estadoMovimientos: 'cerrado',
      estadoBuscarSolicitudes: 'cerrado',
    };
  }
  if(accion.type === 'abrir-modal-filtroBuscarSolicitudes'){
    return {
      ...state,
      estado : 'cerrado',
      workspace : '',
      estadoMovimientos: 'cerrado',
      estadoBuscarSolicitudes: 'abierto',
    };
}

if(accion.type === 'cerrar-modal-filtroBuscarSolicitudes'){
  return {
    ...state,
    estado : 'cerrado',
    workspace : '',
    estadoMovimientos: 'cerrado',
    estadoBuscarSolicitudes: 'cerrado',
  };
}
    
    return state;
  }