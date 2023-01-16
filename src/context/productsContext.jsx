import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { AuthContext } from './authContext';

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthContext);

  const loadProducts = useCallback(async () => {
    if (user?.accessToken) {
      try {
        setLoading(true);
        const res = await fetch('http://localhost:3000/660/products', {
          headers: {
            Authorization: `Bearer ${user?.accessToken}`,
          },
        });
        const json = await res.json();
        if (!res.ok) {
          throw new Error(json);
        }
        setProducts(json);
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    } else {
      setError(new Error('token is not available'));
    }
  }, [user?.accessToken]);

  const value = useMemo(
    () => ({
      loadProducts,
      products,
      loading,
      error,
    }),
    [products, loading, error, loadProducts]
  );

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}
