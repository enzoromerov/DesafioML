export default function TokenReducer (state = {token:""}, action) {
    switch (action.type){
        case 'TOKEN':
            return { ...state, token: action.payload};
        default: return state
    }
}