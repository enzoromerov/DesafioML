import { combineReducers } from "redux";
import ResultadosItems from "./reducers/ResultadosItems";
import ItemName from "./reducers/ItemName"


const rootReducer = combineReducers({

    ResultadosItems,
    ItemName
    
  });

  export default rootReducer;