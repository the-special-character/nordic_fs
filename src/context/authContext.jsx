import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser(JSON.parse(token));
    }
  }, []);

  const login = useCallback(async (values, actions) => {
    try {
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
      setUser(json);
      actions.resetForm();
    } catch (error) {
      actions.setErrors({
        serverError: error.message,
      });
    }
  }, []);

  const register = useCallback(async (values, actions) => {
    try {
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
      setUser(json);
      actions.resetForm();
    } catch (error) {
      actions.setErrors({
        serverError: error.message,
      });
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.clear();
    setUser(null);
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
