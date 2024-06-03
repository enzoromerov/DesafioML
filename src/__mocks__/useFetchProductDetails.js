// __mocks__/useFetchProductDetails.js
import { useState, useEffect } from "react";
import { vi } from "vitest";

const useFetchProductDetailsMock = vi.fn();

useFetchProductDetailsMock.mockImplementation((productId) => {
  const [cargando, setCargando] = useState(true);
  const [producto, setProducto] = useState(null);
  const [categorias, setCategorias] = useState([]);
  const [vendidos, setVendidos] = useState(null);

  useEffect(() => {
    // Simulamos una llamada a la API con un pequeño retraso
    const fetchData = async () => {
      const result = {
        categories: ["Categoría 1"],
        item: {
          id: "MLA123456789",
          title: "Producto de prueba",
          price: { amount: 1000, decimals: 0 },
          sold_quantity: 50,
          condition: "new",
          pictures: [
            {
              url: "https://http2.mlstatic.com/D_NQ_NP_2x_892137-MLA71448061809_092023-F.webp",
            },
          ],
          shipping: {
            free_shipping: true,
          },
          plain_text: "Descripción del producto",
        },
      };

      await new Promise((resolve) => setTimeout(resolve, 10)); // Retraso simulado
      setCategorias(result.categories);
      setProducto(result.item);
      setVendidos(40); // Valor simulado de vendidos
      setCargando(false);
    };

    // Llamamos a fetchData inmediatamente y cada vez que productId cambie
    fetchData();
  }, [productId]); // Agregamos productId como dependencia

  return { categorias, producto, cargando, vendidos };
});

export default useFetchProductDetailsMock;