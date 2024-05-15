const estadoWorkspace = {
    estado: 'inactivo',
    workspace: ''
}
    
export default function EstadoWorkspaceReducer(state = estadoWorkspace, accion) {
    
    if(accion.type === 'workspace-activo'){
        return {
            ...state,
            estado : 'activo',
            workspace : accion.payload 
        };
    }

    if(accion.type === 'workspace-inactivo'){
        return {
            ...state,
            estado : 'inactivo',
            workspace : ''      };
    }
    
    return state;
}