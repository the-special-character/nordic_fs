import React from 'react';
import { createRoot } from 'react-dom/client';
import Todo from './todo';
import './main.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<Todo />);
