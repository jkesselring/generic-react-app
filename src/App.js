import React from 'react';
import Footer from './components/Footer';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" aria-label="A spinning bowling ball icon." />
      </header>
      <Footer />
    </div>
  );
}

export default App;
