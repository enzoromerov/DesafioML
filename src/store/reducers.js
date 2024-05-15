import { combineReducers } from "redux";
import DesancladoReducer from "./reducers/DesancladoReducer";
import AncladoReducer from "./reducers/AncladoReducer";
import WidgetReducer from "./reducers/WidgetReducer";
import FiltroGeneralReducer from "./reducers/FiltroGeneralReducer";
import CerrarSesionReducer from "./reducers/CerrarSesionReducer";
import EliminarWidgetReducer from "./reducers/EliminarWidgetReducer";
import WorkspaceReducer from "./reducers/WorkspaceReducer";
import EstadoWorkspaceReducer from "./reducers/EstadoWorkspaceReducer";
import ContenedorWorkspacesReducer from "./reducers/ContenedorWorkspacesReducer";
import LayoutReducer from "./reducers/LayoutReducer";
import ArrayWidgetsReducer from "./reducers/ArrayWidgetsReducer";
import NotifReducer from "./reducers/NotifReducer";
import ResultFilterReducer from "./reducers/ResultFilterReducer";
import SelectLayoutReducer from "./reducers/SelectLayoutReducer";
import TokenReducer from "./reducers/TokenReducer";
import UserReducer from "./reducers/UserReducer";
import WidgetsReducer from "./reducers/WidgetsReducer";
import ErrorLoginModalReducer from"./reducers/ErrorLoginModalReducer";
import FiltroModalReducer from"./reducers/FiltroModalReducer";
import FiltroModalMSPReducer from"./reducers/FiltroModalMSPReducer";
import ErrorAbmModalReducer from "./reducers/ErrorAbmModalReducer";
import EliminarAbmReducer from "./reducers/EliminarAbmReducer";
import ElminarWorkSpaceModalReducer from "./reducers/ElminarWorkSpaceModalReducer";
import ClienteModalReducer from "./reducers/ClienteModalReducer";
import FiltroConsultaSaldosReducer from "./reducers/FiltroConsultaSaldosReducer";
import InfoSolicitudReducer from "./reducers/InfoSolicitudReducer";
import ModificarAbmReducer from "./reducers/ModificarAbmReducer";
import HabilitarAbmReducer from "./reducers/HabilitarAbmReducer";
import AlertaModalReducer from "./reducers/AlertaModalReducer";
import AutorizacionSolicitudReducer from "./reducers/AutorizacionSolicitudReducer";
import FiltroConsultaMovimientosReducer from "./reducers/FiltroConsultaMovimientosReducer";
import SolicitudFondeoModalReducer from "./reducers/SolicitudFondeoModalReducer";
import TokenAccess from "./reducers/TokenAccess";
import PermisosToken from "./reducers/PermisosToken";
import FiltroBuscarSolicitudesReducer from "./reducers/FiltroBuscarSolicitudesReducer"

const rootReducer = combineReducers({
    LayoutReducer,
    WorkspaceReducer,
    ContenedorWorkspacesReducer,
    DesancladoReducer,
    FiltroModalReducer,
    FiltroModalMSPReducer,
    AncladoReducer,
    WidgetReducer,
    FiltroGeneralReducer,
    EstadoWorkspaceReducer,
    CerrarSesionReducer,
    EliminarWidgetReducer,
    ArrayWidgetsReducer,
    NotifReducer,
    ResultFilterReducer,
    SelectLayoutReducer,
    TokenReducer,
    UserReducer,
    WidgetsReducer,
    ErrorLoginModalReducer,
    ErrorAbmModalReducer,
    EliminarAbmReducer,
    ElminarWorkSpaceModalReducer,
    ClienteModalReducer,
    FiltroConsultaSaldosReducer,
    InfoSolicitudReducer,
    ModificarAbmReducer,
    HabilitarAbmReducer,
    AlertaModalReducer,
    AutorizacionSolicitudReducer,
    FiltroConsultaMovimientosReducer,
    SolicitudFondeoModalReducer,
    TokenAccess,
    PermisosToken,
    FiltroBuscarSolicitudesReducer,
    
  });

  export default rootReducer;