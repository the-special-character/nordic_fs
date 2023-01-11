import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from 'react';
import { AuthContext } from './authContext';
import {
  productsInitialState,
  productsReducer,
} from '../reducer/productsReducer';

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [productsState, dispatch] = useReducer(
    productsReducer,
    productsInitialState
  );
  const { user, logout } = useContext(AuthContext);

  const loadProducts = useCallback(async () => {
    if (user?.accessToken) {
      try {
        dispatch({ type: 'LOAD_PRODUCTS_REQUEST' });
        // setLoading(true);
        const res = await fetch('http://localhost:3000/660/products', {
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
        dispatch({ type: 'LOAD_PRODUCTS_SUCCESS', payload: json });
      } catch (err) {
        dispatch({ type: 'LOAD_PRODUCTS_FAIL', payload: err });
      }
    } else {
      dispatch({
        type: 'LOAD_PRODUCTS_FAIL',
        paylod: new Error('token is not available'),
      });
    }
  }, [user?.accessToken]);

  const value = useMemo(
    () => ({
      loadProducts,
      productsState,
    }),
    [productsState, loadProducts]
  );

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}
