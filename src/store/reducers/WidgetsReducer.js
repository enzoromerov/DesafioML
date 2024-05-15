export default function WidgetsReducer (state = {widgets: []}, action) {

    switch (action.type) {
      case 'WIDGETS':
        return{
          ...state,
          widgets: action.payload,
        }
        
        default: return state;
    }
  } 