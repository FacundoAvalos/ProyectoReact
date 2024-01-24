import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Main/>
    </div>
  );
}

export default App;
