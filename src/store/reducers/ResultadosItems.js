const initialState = {
  author: {
    name: "",
    lastname: ""
  },
  items: []
}

export default function ResultadosItems(state = initialState, action) {
  switch(action.type) {
    case 'SET_AUTHOR':
      return {
        ...state,
        author: {
          ...state.author,
          ...action.payload 
        }
      };
    case 'SET_ITEMS':
      return {
        ...state,
        items: action.payload 
      };
    default:
      return state;
  }
}