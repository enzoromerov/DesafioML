function useFormatPrice() {
    const formatPrice = (amount, decimals) => {
      const formatter = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: decimals === 0 ? 2 : 0, 
        maximumFractionDigits: 0, 
      });
      return formatter.format(amount);
    };
  
    return formatPrice;
  }
  
  export default useFormatPrice;