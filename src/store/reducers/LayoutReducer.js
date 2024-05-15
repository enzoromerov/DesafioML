export default function LayoutReducer (state = { layout: JSON }, action) {
    switch (action.type) {
      case "LAYOUT":
        return {
          ...state,
          id: action.payload.id,
          description: action.payload.description,
          components: action.payload.components,
        };
  
      default:
        return state;
    }
  }