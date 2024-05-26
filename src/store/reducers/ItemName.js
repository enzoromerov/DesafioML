export default function ItemName (state = {ItemName:""}, action) {
    switch (action.type){
        case 'ItemName':
            return { ...state, ItemName: action.payload};
        default: return state
    }
}