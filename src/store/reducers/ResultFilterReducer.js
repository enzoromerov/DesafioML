export default function ResultFilterReducer (state = { resultFilter: JSON }, action) {
    switch (action.type) {
      case "RESULTFILTER":
        return {
          ...state,
          page: action.payload.page,
          size: action.payload.size,
          filters: action.payload.filters,
          count: action.payload.count,
        };
  
      default:
        return state;
    }
  }