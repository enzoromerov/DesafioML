import { useState, useEffect } from "react";
import axios from "axios";
import urlBack from "../utilities/urlBack";

function useFetchResults(query, initialPage = 1, limit = 4) {
  const [resultados, setResultados] = useState({
    categorias: [],
    items: [],
    paginacion: {
      paginaActual: initialPage,
      totalPaginas: 0,
    },
  });
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerResultados = async () => {
      const cacheKey = `resultados_${query}_${initialPage}_${limit}`;
      const cachedData = localStorage.getItem(cacheKey);

      if (cachedData) {
        setResultados(JSON.parse(cachedData));
      } else {
        try {
          const respuesta = await axios.get(
            `${urlBack}/api/items?q=${query}&page=${initialPage}&limit=${limit}`
          );

          const resultadosFormateados = {
            categorias: respuesta.data.categories,
            items: respuesta.data.items,
            paginacion: {
              paginaActual: respuesta.data.pagination?.page || 1,
              totalPaginas: respuesta.data.pagination?.pages || 1,
            },
          };

          setResultados(resultadosFormateados);
          localStorage.setItem(cacheKey, JSON.stringify(resultadosFormateados));
        } catch (error) {
          console.error("Error al obtener resultados:", error);
          setError(error); // Manejo de errores
        }
      }
      setCargando(false);
    };

    obtenerResultados(); // Llama a la función dentro del useEffect
  }, [query, initialPage, limit]); // Dependencias para re-ejecutar el efecto

  return { resultados, cargando, error }; // Retorna los datos y estados necesarios
}

export default useFetchResults;