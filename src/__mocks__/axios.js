export default {
    get: vi.fn(() =>
      Promise.resolve({
        data: {
          item: {
            id: "MLA123456789",
            title: "Producto de prueba",
            price: 1000,
            sold_quantity: 50, // Se quitó la coma extra
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
  };