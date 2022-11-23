import React from 'react';
import { createRoot } from 'react-dom/client';
const bgColor="red"
const clr="green"

function App({ name, designation }) {
  return (
    <>
      <div>
        <h1
          className="btn"
          style={{
            backgroundColor: bgColor,
            color: clr,
          }}
        >
          {name}
        </h1>
        <h2>{designation}</h2>
      </div>
      <div>
        <input type="checkbox" />
      </div>
    </>
  );
}
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <>
    <App name="Yagnesh" designation="CEO" />
    <App name="Aman" designation="Student" />
    <App name="Yash" designation="Student" />
    <App name="Kishor" designation="Student" />

  </>,

);
