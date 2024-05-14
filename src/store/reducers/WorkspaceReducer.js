


export default function WorkspaceReducer(state = { workspace: JSON }, action) {
    switch (action.type) {
      case "WORKSPACE":
        return {
          ...state,
          id: action.payload.id,
          name: action.payload.name,
          description: action.payload.description,
          layout: action.payload.layout,
          anchor: action.payload.anchor,
        };
  
      default:
        return state;
    }
  }
