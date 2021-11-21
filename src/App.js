import './App.css';
import Sidebar from './sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import UIContainer from './UIContainer';
import React from "react";

let Ui = new React.Component(UIContainer);

function App() {
  return (
      <Router>
        <div className="App">
            <Sidebar />
            <UIContainer></UIContainer>
        </div>
      </Router>
  );
}

export default App;
