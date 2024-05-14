const  FiltroConsultaMovimientos = {
    banco : "",
    fechaDesde : "",
    fechaHasta : "",
    moneda:"",
    movementType: ""
   }
   
  
  export default function FiltroConsultaMovimientosReducer(state = { FiltroConsultaMovimientos }, action) {
  
      switch (action.type) {
        case "FiltroConsultaMovimientos":
          return {
            ...state,
            moneda: action.payload.moneda,
            banco: action.payload.banco,
            fechaDesde: action.payload.fechaDesde,
            fechaHasta: action.payload.fechaHasta, 
            movementType: action.payload.movementType,
          };
    
        default:
          return state;
      }
    }