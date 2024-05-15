export default function PermisosToken (state = {Permisos:[]}, action) {
    switch (action.type){
        case 'Permisos':
            return { ...state, Permisos: action.payload};
        default: return state
    }
}