// useFetchProductDetails.test.jsx

import { renderHook } from "@testing-library/react-hooks";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import useFetchProductDetails from "../hooks/useFetchProductDetails.js";
import axios from "axios";
import cantidadDisponibleReducer from "../store/reducers/CantidadDisponible.js";

// Creamos un mock para el store de Redux
const mockStore = configureStore({
  reducer: {
    CantidadDisponible: cantidadDisponibleReducer,
  },
});

vi.mock("axios", () => ({
  // Usamos jest.mock para simular axios
  default: {
    get: vi.fn(() =>
      Promise.resolve({
        data: {
          item: {
            id: "MLA123456789",
            title: "Producto de prueba",
            price: 1000,
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
          categories: ["Categoría 1", "Categoría 2"],
        },
      })
    ),
  },
}));

vi.mock("../utilities/urlBack", () => ({
  default: "http://localhost:3001", // Reemplaza con tu URL real si es necesario
}));

describe("useFetchProductDetails", () => {
  beforeEach(() => {
    vi.clearAllMocks(); //window.localStorage.clear();
  });

  it("debe obtener product details de API ", async () => {
    const productId = "MLA123456789";
    mockStore.dispatch({ type: "setCantidadDisponible", payload: 10 }); // Simulamos que hay 10 disponibles en el store

    const { result } = renderHook(() => useFetchProductDetails(productId), {
      wrapper: ({ children }) => (
        <Provider store={mockStore}>{children}</Provider>
      ),
    }); // Verifica el estado inicial

    expect(result.current.cargando).toBe(true);
    expect(result.current.categorias).toEqual([]);
    expect(result.current.producto).toBeNull();
    expect(result.current.vendidos).toBe(""); // Espera a que termine la petición y verifica el resultado

    await vi.waitFor(() => expect(result.current.cargando).toBe(false));

    expect(result.current.categorias).toEqual(["Categoría 1", "Categoría 2"]);
    expect(result.current.producto).toEqual({
      id: "MLA123456789",
      title: "Producto de prueba",
      price: 1000,
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
    });
    expect(result.current.vendidos).toBe(50);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      "http://localhost:3001/api/items/MLA123456789",
      { headers: { "Content-Type": "application/json", accept: "*/*" } }
    );
  });
});
