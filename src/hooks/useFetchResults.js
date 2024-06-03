import { useEffect, useState, useRef } from "react";
import axios from "axios";
import urlBack from "../utilities/urlBack"; // Asegúrate de que la ruta sea correcta

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

  // Usamos useRef para almacenar paginaActual
  const paginaActualRef = useRef(initialPage);

  useEffect(() => {
    const obtenerResultados = async () => {
      try {
        const respuesta = await axios.get(
          `${urlBack}/api/items?q=${query}&page=${paginaActualRef.current}&limit=${limit}` // Usamos paginaActualRef.current
        );

        setResultados({
          categorias: respuesta.data.categories,
          items: respuesta.data.items,
          paginacion: {
            paginaActual: respuesta.data.pagination?.page || 1,
            totalPaginas: respuesta.data.pagination?.pages || 1,
          },
        });
      } catch (error) {
        console.error("Error al obtener resultados:", error);
      } finally {
        setCargando(false);
      }
    };

    if (query) {
      obtenerResultados();
    }
  }, [query, limit]); // Eliminamos paginaActual de las dependencias

  const handlePageChange = (nuevaPagina) => {
    if (nuevaPagina >= 1 && nuevaPagina <= resultados.paginacion.totalPaginas) {
      // Actualizamos paginaActualRef antes de setResultados
      paginaActualRef.current = nuevaPagina; 
      setResultados((prevResultados) => ({
        ...prevResultados,
        paginacion: {
          ...prevResultados.paginacion,
          paginaActual: nuevaPagina,
        },
      }));
    }
  };

  return { resultados, cargando, handlePageChange };
}

export default useFetchResults;
