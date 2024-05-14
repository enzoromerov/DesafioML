export default function ArrayWidgetsReducer (state = {arraywidgets:JSON }, action) {
    switch (action.type) {
        case 'SetArray':
            return{ ...state, 
                posicion1: action.payload.posicion1,
                posicion2: action.payload.posicion2,
                posicion3: action.payload.posicion3,
                posicion4: action.payload.posicion4,
                posicion5: action.payload.posicion5,
                posicion6: action.payload.posicion6,};

            default: return state
        }   
    }