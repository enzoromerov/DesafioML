
const estadoInicial = {
    modal: 'cerrado',
    posicion: '',
    widget: '',
    workspace: ''
  }
      
export default function WidgetReducer(state = estadoInicial, accion) {
    
    if(accion.type === 'posicionar-widget'){
        return {
            ...state,
            modal : 'abierto',
            posicion: accion.payload.posicion,
            workspace: accion.payload.workspace,
            widget: '',
          };
    }

    if(accion.type === 'cancelar-widget'){
        return {
            ...state,
            modal : 'cerrado',
            posicion: '',
            workspace: '',
            widget: '',
          };
    }

    if(accion.type === 'agregar-widget'){
          return {
            ...state,
            modal : 'cerrado',
            widget : accion.payload.widget,
          };
    }
    
    return state;
}