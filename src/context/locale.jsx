import React, { createContext, useCallback, useMemo, useState } from 'react';

export const LocaleContext = createContext();

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState('en');

  const toggleLocale = useCallback(() => {
    setLocale(val => (val === 'en' ? 'fr' : 'en'));
  }, []);

  const value = useMemo(
    () => ({
      locale,
      toggleLocale,
    }),
    [locale]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}
