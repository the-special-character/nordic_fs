import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from 'react';
import { cartInitialState, cartReducer } from '../reducer/cartReducer';
import { AuthContext } from './authContext';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, cartInitialState);
  const { user, logout } = useContext(AuthContext);

  const loadCart = useCallback(async () => {
    if (user?.accessToken) {
      try {
        dispatch({ type: 'LOAD_CART_REQUEST' });
        const res = await fetch('http://localhost:3000/660/cart', {
          headers: {
            Authorization: `Bearer ${user?.accessToken}`,
          },
        });
        const json = await res.json();
        if (res.status === 401) {
          logout();
        }
        if (!res.ok) {
          throw new Error(json);
        }
        dispatch({ type: 'LOAD_CART_SUCCESS', payload: json });
      } catch (err) {
        dispatch({ type: 'LOAD_CART_FAIL', payload: err });
      }
    } else {
      dispatch({
        type: 'LOAD_CART_FAIL',
        paylod: new Error('token is not available'),
      });
    }
  }, [user?.accessToken]);

  const addCart = useCallback(
    async data => {
      if (user?.accessToken) {
        try {
          dispatch({ type: 'ADD_CART_REQUEST' });
          const res = await fetch('http://localhost:3000/660/cart', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              Authorization: `Bearer ${user?.accessToken}`,
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
          });
          const json = await res.json();
          if (res.status === 401) {
            logout();
          }
          if (!res.ok) {
            throw new Error(json);
          }
          dispatch({ type: 'ADD_CART_SUCCESS', payload: json });
        } catch (err) {
          dispatch({ type: 'ADD_CART_FAIL', payload: err });
        }
      } else {
        dispatch({
          type: 'ADD_CART_FAIL',
          paylod: new Error('token is not available'),
        });
      }
    },
    [user?.accessToken]
  );

  const updateCart = useCallback(
    async data => {
      if (user?.accessToken) {
        try {
          dispatch({ type: 'UPDATE_CART_REQUEST' });
          const res = await fetch(`http://localhost:3000/660/cart/${data.id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
              Authorization: `Bearer ${user?.accessToken}`,
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
          });
          const json = await res.json();
          if (res.status === 401) {
            logout();
          }
          if (!res.ok) {
            throw new Error(json);
          }
          dispatch({ type: 'UPDATE_CART_SUCCESS', payload: json });
        } catch (err) {
          dispatch({ type: 'UPDATE_CART_FAIL', payload: err });
        }
      } else {
        dispatch({
          type: 'UPDATE_CART_FAIL',
          paylod: new Error('token is not available'),
        });
      }
    },
    [user?.accessToken]
  );

  const deleteCart = useCallback(
    async data => {
      if (user?.accessToken) {
        try {
          dispatch({ type: 'DELETE_CART_REQUEST' });
          const res = await fetch(`http://localhost:3000/660/cart/${data.id}`, {
            method: 'DELETE',
            headers: {
              Authorization: `Bearer ${user?.accessToken}`,
            },
          });
          const json = await res.json();
          if (res.status === 401) {
            logout();
          }
          if (!res.ok) {
            throw new Error(json);
          }
          dispatch({ type: 'DELETE_CART_SUCCESS', payload: data });
        } catch (err) {
          dispatch({ type: 'DELETE_CART_FAIL', payload: err });
        }
      } else {
        dispatch({
          type: 'DELETE_CART_FAIL',
          paylod: new Error('token is not available'),
        });
      }
    },
    [user?.accessToken]
  );

  const value = useMemo(
    () => ({
      loadCart,
      addCart,
      updateCart,
      deleteCart,
      cartState,
    }),
    [cartState, loadCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
