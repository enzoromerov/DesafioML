import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "../components/productDetails/productDetails";
import { vi, it, expect, describe, beforeEach } from "vitest";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cantidadDisponibleReducer from "../store/reducers/CantidadDisponible.js";

vi.mock("../../hooks/useFetchProductDetails");
vi.mock("../../hooks/useFormatPrice");

describe("ProductDetails", () => {
  beforeEach(() => {
    vi.clearAllMocks(); //window.localStorage.clear();
    vi.useFakeTimers(); // Activa el modo de timers falsos
  });
  it("deberia renderizar Cargando... y luego los datos del mock", async () => {
    const routePath = "/items/:id";
    const mockStore = configureStore({
      reducer: {
        CantidadDisponible: cantidadDisponibleReducer,
      },
      preloadedState: {
        CantidadDisponible: 10,
      },
    });
    render(
      <Provider store={mockStore}>
        <MemoryRouter initialEntries={[`/items/MLA123456789`]}>
          <Routes>
            <Route path={routePath} element={<ProductDetails />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    expect(screen.queryByText("Cargando..."));
    // Esperamos a que se complete la carga y a que aparezcan las categorías
    await vi.waitFor(() => {
      expect(screen.queryByText("Cargando...")).toBeNull(); // Esperamos que "categories" esté presente
    });
    expect(screen.queryByText("Comprar"));
    expect(screen.queryByText("Producto de prueba"));
    expect(screen.queryByText("Descripción del producto"));
  });
});
