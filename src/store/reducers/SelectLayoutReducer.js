export default function SelectLayoutReducer (state = {selectLayout:""}, action){
    switch (action.type){
        case 'SELECTLAYOUT':
            return { ...state, selectLayout: action.payload};
        default: return state
    }
  }