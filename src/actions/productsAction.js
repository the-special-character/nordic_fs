export const loadProducts = () => async dispatch => {
  try {
    dispatch({ type: 'LOAD_PRODUCTS_REQUEST' });
    // setLoading(true);
    const res = await fetch('http://localhost:3000/products');
    const json = await res.json();
    // if (res.status === 401) {
    //   logout();
    // }
    if (!res.ok) {
      throw new Error(json);
    }
    dispatch({ type: 'LOAD_PRODUCTS_SUCCESS', payload: json });
  } catch (err) {
    dispatch({ type: 'LOAD_PRODUCTS_FAIL', payload: err });
  }
};

export const a = 1;
