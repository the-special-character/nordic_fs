import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import authReducer, { authInitialState } from '../reducer/authReducer';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [{ user }, dispatch] = useReducer(authReducer, authInitialState);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch({ type: 'AUTH_SUCCESS', payload: JSON.parse(token) });
    }
  }, []);

  const login = useCallback(async (values, actions) => {
    try {
      dispatch({ type: 'AUTH_REQUEST' });
      const res = await fetch('http://localhost:3000/login', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json);
      }
      localStorage.setItem('token', JSON.stringify(json));
      dispatch({ type: 'AUTH_SUCCESS', payload: json });
      actions.resetForm();
    } catch (error) {
      actions.setErrors({
        serverError: error.message,
      });
      dispatch({ type: 'AUTH_FAIL', payload: error });
    }
  }, []);

  const register = useCallback(async (values, actions) => {
    try {
      dispatch({ type: 'AUTH_REQUEST' });
      const { confirmPassword, ...rest } = values;
      const res = await fetch('http://localhost:3000/register', {
        method: 'POST',
        body: JSON.stringify(rest),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json);
      }
      localStorage.setItem('token', JSON.stringify(json));
      dispatch({ type: 'AUTH_SUCCESS', payload: json });
      actions.resetForm();
    } catch (error) {
      actions.setErrors({
        serverError: error.message,
      });
      dispatch({ type: 'AUTH_FAIL', payload: error });
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.clear();
    dispatch({ type: 'AUTH_CLEAR' });
  }, []);

  const value = useMemo(
    () => ({
      user,
      login,
      register,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
