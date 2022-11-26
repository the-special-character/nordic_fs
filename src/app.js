import React from 'react';
// import App from './app';
// first letter should be in upper case
// you can return only single Elementfrom component
// in line style  attribute is pass as an object
// insted of class use classs name

function App({ name, degisination }) {
  return (
    <>
      <h1
        className="btn"
        style={{
          backgroungColor: 'yellow',
          color: 'blue',
        }}
      >
        {name}

      </h1>
      <h1>{degisination}</h1>
      <div>
        <input type="checkbox" />
      </div>
    </>
  );
}

export default App;
