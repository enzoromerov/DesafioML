import { useEffect, useState } from "react";
import axios from "axios";
import urlBack from "../utilities/urlBack"; // Asegúrate de que la ruta sea correcta
import { useSelector } from "react-redux";

function useFetchProductDetails(productId) {
  const CantidadDisponible = useSelector((state) => state.CantidadDisponible);
  const [categorias, setCategorias] = useState([]);
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [vendidos, setVendidos] = useState("");

  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const respuesta = await axios.get(`${urlBack}/api/items/${productId}`, {
          headers: { "Content-Type": "application/json", accept: "*/*" },
        });

        setCategorias(respuesta.data.categories);
        setProducto(respuesta.data.item);

        const vendidos = CantidadDisponible
          ? respuesta.data.item.sold_quantity -
            CantidadDisponible.CantidadDisponible
          : respuesta.data.item.sold_quantity;

        setVendidos(vendidos);
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      } finally {
        setCargando(false);
      }
    };

    if (productId) {
      obtenerProducto();
    }
  }, [productId, CantidadDisponible]);

  return { categorias, producto, cargando, vendidos };
}

export default useFetchProductDetails;