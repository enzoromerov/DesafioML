import { renderHook } from "@testing-library/react-hooks";
import { describe, it, expect, vi } from "vitest";
import useFetchResults from '../hooks/useFetchResults.js';
import axios from "axios"; 

vi.mock("axios", () => ({ 
  default: {
    get: vi.fn(() =>
      Promise.resolve({
        data: {
          categories: [],
          items: [],
          pagination: { page: 1, pages: 1 },
        },
      })
    ),
  },
}));

vi.mock("../utilities/urlBack", () => ({
  default: "http://localhost:3001", 
}));

describe("useFetchResults", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    window.localStorage.clear();
  });

  it("debería obtener resultados de la API", async () => {
    const query = "test";
    const initialPage = 1;
    const limit = 4;

    const { result } = renderHook(() =>
      useFetchResults(query, initialPage, limit)
    );

    // Verifica el estado inicial
    expect(result.current.cargando).toBe(true);
    expect(result.current.resultados).toEqual({
      categorias: [],
      items: [],
      paginacion: { paginaActual: 1, totalPaginas: 0 },
    });
    expect(result.current.error).toBeNull();

    // Espera a que termine la petición y verifica el resultado
    await vi.waitFor(() => expect(result.current.cargando).toBe(true));

    await vi.waitFor(() => expect(result.current.cargando).toBe(false));
    expect(result.current.resultados).toEqual({
      categorias: [],
      items: [],
      paginacion: { paginaActual: 1, totalPaginas: 1 },
    });

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      "http://localhost:3001/api/items?q=test&page=1&limit=4"
    );
  });

  it("debería utilizar resultados almacenados en caché si están disponibles", async () => {
    const query = "test";
    const initialPage = 1;
    const limit = 4;
    const cachedData = {
      categories: ["Electrónica"],
      items: [{ id: 1, title: "Producto en caché" }],
      paginacion: { paginaActual: 1, totalPaginas: 1 },
    };

    // Almacena datos en caché antes de renderizar el hook
    window.localStorage.setItem(
      `resultados_${query}_${initialPage}_${limit}`,
      JSON.stringify(cachedData)
    );

    const { result } = renderHook(() =>
      useFetchResults(query, initialPage, limit)
    );

    // Espera a que el hook se actualice
    await vi.waitFor(() => expect(result.current.cargando).toBe(false));

    // Verifica que se usaron los datos en caché
    expect(axios.get).not.toHaveBeenCalled(); // No se debe llamar a la API
    expect(result.current.resultados).toEqual(cachedData);
  });

});
