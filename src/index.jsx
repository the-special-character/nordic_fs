import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './main.css';

import reducers from './reducer';
import App from './app';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <h1>Home Page</h1>,
//   },
//   {
//     path: '/about',
//     element: <h1>About page</h1>,
//   },
//   {
//     path: '/contact',
//     element: <h1>Contact page</h1>,
//   },
// ]);

const container = document.getElementById('root');
const root = createRoot(container);

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
