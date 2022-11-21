import React from 'react';
import { createRoot } from 'react-dom/client';
// import App from './app';
// first letter should be in upper case 
// you can return only single Elementfrom component 
// in line style  attribute is pass as an object 
// insted of class use classs name 


const container = document.getElementById('root');
const root = createRoot(container);
import App from "./app";
root.render(
<>
<App  name="ritik" degisination="developer"/>
<App name="ritik" degisination="developer"/>
<App name="ritik" degisination="developer"/>
<App name="ritik" degisination="developer"/>
<App name="ritik" degisination="developer"/>
</>
);
