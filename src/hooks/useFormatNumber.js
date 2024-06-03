function useFormatNumber() {
    const formatNumber = (numero) => {
      return new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(numero);
    };
  
    return formatNumber;
  }
  
  export default useFormatNumber;