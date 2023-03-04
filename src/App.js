import './App.css';
import React from 'react';
import Divider from './images/pattern-divider-desktop.svg';
import imgBtn from './images/icon-dice.svg'
import QuoteGenerator from './components/QuoteGenerator';

function App() {

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="App">
      <div className="container">
        <QuoteGenerator />
        <div className="divider">
        <img src={Divider} alt=""></img>
        </div>
        <button onClick={refreshPage}><img src={imgBtn} alt=""></img></button>
      </div>
    </div>
  );

}

export default App;
