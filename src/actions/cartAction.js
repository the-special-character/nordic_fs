export const loadCart = () => async dispatch => {
  try {
    dispatch({ type: 'LOAD_CART_REQUEST' });
    // setLoading(true);
    const res = await fetch('http://localhost:3000/cart');
    const json = await res.json();
    // if (res.status === 401) {
    //   logout();
    // }
    if (!res.ok) {
      throw new Error(json);
    }
    dispatch({ type: 'LOAD_CART_SUCCESS', payload: json });
  } catch (err) {
    dispatch({ type: 'LOAD_CART_FAIL', payload: err });
  }
};

export const addCart = data => async dispatch => {
  try {
    dispatch({ type: 'ADD_CART_REQUEST' });
    const res = await fetch('http://localhost:3000/cart', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const json = await res.json();

    if (!res.ok) {
      throw new Error(json);
    }
    dispatch({ type: 'ADD_CART_SUCCESS', payload: json });
  } catch (err) {
    dispatch({ type: 'ADD_CART_FAIL', payload: err });
  }
};

export const updateCart = data => async dispatch => {
  try {
    dispatch({ type: 'UPDATE_CART_REQUEST' });
    const res = await fetch(`http://localhost:3000/cart/${data.id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const json = await res.json();
    // if (res.status === 401) {
    //   logout();
    // }
    if (!res.ok) {
      throw new Error(json);
    }
    dispatch({ type: 'UPDATE_CART_SUCCESS', payload: json });
  } catch (err) {
    dispatch({ type: 'UPDATE_CART_FAIL', payload: err });
  }
};

export const deleteCart = data => async dispatch => {
  try {
    dispatch({ type: 'DELETE_CART_REQUEST' });
    const res = await fetch(`http://localhost:3000/cart/${data.id}`, {
      method: 'DELETE',
    });
    const json = await res.json();
    // if (res.status === 401) {
    //   logout();
    // }
    if (!res.ok) {
      throw new Error(json);
    }
    dispatch({ type: 'DELETE_CART_SUCCESS', payload: data });
  } catch (err) {
    dispatch({ type: 'DELETE_CART_FAIL', payload: err });
  }
};
