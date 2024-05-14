export default function ContenedorWorkspacesReducer(state = { workspaces: [] }, action) {
    switch (action.type) {
      case "WORKSPACES":
        return {
          ...state,
          workspaces: action.payload,
        };
  
      default:
        return state;
    }
  }