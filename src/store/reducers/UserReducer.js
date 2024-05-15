export default function UserReducer (state = { User:JSON }, action){
    switch (action.type) {
        case "user":
            return{
                ...state,
                email: action.payload.email,
                nombre: action.payload.nombre,
                apelldo: action.payload.apellido,
                carrusel: action.payload.carrusel,
                
                
            };
            default:
                return state;
    }
}