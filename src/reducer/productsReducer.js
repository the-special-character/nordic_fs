export const productsInitialState = {
  products: [],
  loading: false,
  error: null,
};

export const productsReducer = (
  state = productsInitialState,
  { type, payload }
) => {
  switch (type) {
    case 'LOAD_PRODUCTS_REQUEST':
      return { ...state, loading: true };

    case 'LOAD_PRODUCTS_SUCCESS':
      return { ...state, loading: false, error: null, products: payload };

    case 'LOAD_PRODUCTS_FAIL':
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
