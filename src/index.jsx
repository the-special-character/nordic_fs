import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import './main.css';

import reducers from './reducer';
import App from './app';
import logger from './middleware/logger';

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

const middleware = [logger, thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware))
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
