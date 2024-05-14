
const initialState = {
  nombreSolicitud: "",
  montoSolicitudMin: "",
  montoSolicitudMax: "",
  numeroCuenta: "",
  fechaDesde: "",
  fechaHasta: "",
  moneda: "",
  tipoDeTransferencia: "",
  nombreEstado: "",
};

export default function FiltroBuscarSolicitudesReducer(state = initialState, action) {
  switch (action.type) {
    case "FiltroBuscarSolicitudes":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}