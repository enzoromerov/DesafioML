export default function CantidadDisponible (state = {CantidadDisponible:""}, action) {
    switch (action.type){
        case 'CantidadDisponible':
            return { ...state, CantidadDisponible: action.payload};
        default: return state
    }
}