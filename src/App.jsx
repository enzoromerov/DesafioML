import React from 'react'
import './App.scss';
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import MainRoutes from "./Routes/routes";
import { PersistGate } from 'redux-persist/integration/react';

function App () {
  
  
  return (
    
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>          
              <MainRoutes />
        </PersistGate>
      </Provider>
    
  );
}
export default App;
