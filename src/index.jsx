import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';

const container = document.getElementById('root');
const root = createRoot(container);

const greetMessage = 'Hola';

App.getDerivedStateFromProps = (nextProps, prevState) => ({
  greet: `${greetMessage} ${nextProps.name}`,
});

root.render(<App name="Seraj" />);
