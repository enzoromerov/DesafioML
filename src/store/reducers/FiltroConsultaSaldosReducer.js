const  FiltroConsultaSaldos = {
  moneda: "",
  banco: "",
  fechaDesde: "",
  fechaHasta: "",
}

export default function FiltroConsultaSaldosReducer(state = { FiltroConsultaSaldos }, action) {

    switch (action.type) {
      case "FiltroConsultaSaldos":
        return {
          ...state,
          moneda: action.payload.moneda,
          banco: action.payload.banco,
          fechaDesde: action.payload.fechaDesde,
          fechaHasta: action.payload.fechaHasta, 
        };
  
      default:
        return state;
    }
  }