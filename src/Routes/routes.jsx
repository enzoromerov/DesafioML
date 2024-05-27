import React from 'react';
import { Provider } from "react-redux";
import { store } from "../store/store.js";
import Buscar from '../vistas/Buscar.jsx'



const MainRoutes = () => {
  return (
    <Provider store={store}>
      <Buscar/>
    </Provider>
    )
};
export default MainRoutes;