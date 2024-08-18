import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';  // Ensure Alert component is imported
import About from './components/About';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [Mode, setMode] = useState('light'); // DARK MODE
  const [alert, setAlert] = useState(null); // ALERTS
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const ToggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1e3d59';
      document.body.style.color = '#dcdcdc'; // Warmer off-white
      showAlert('Dark mode has been set', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'grey';
      showAlert('Light mode has been set', 'success');
    }
  };

  useEffect(() => {
    console.log('Current Mode:', Mode);
  }, [Mode]);

  return (
    <Router>
      <Navbar title="TextUtils" Mode={Mode} ToggleMode={ToggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm heading="Enter the text to analyze" />} />
          <Route path="/about" element={<About Mode={Mode}/>} />
        </Routes>
      </div>
    </Router>
  );
}
export default App