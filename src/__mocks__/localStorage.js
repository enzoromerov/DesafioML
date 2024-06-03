const localStorageMock = {
    store: {},
    getItem: function (key) {
      return this.store[key] || null;
    },
    setItem: function (key, value) {
      this.store[key] = value;
    },
    clear: function () {
      this.store = {};
    },
  };
  
  Object.defineProperty(window, "localStorage", { value: localStorageMock });