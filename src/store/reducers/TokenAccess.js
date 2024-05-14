export default function TokenAccess (state = {tokenAccess:""}, action) {
    switch (action.type){
        case 'TOKENACCESS':
            return { ...state, tokenAccess: action.payload};
        default: return state
    }
}