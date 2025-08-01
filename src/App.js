import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';

//taken from react router dom
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  useEffect(() => {
    showAlert("Welcome to TextUtils!", "success");
  }, []);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(()=> setAlert(null), 1500);
  }

  const toggleMode = () => {
  if (mode === 'light') {
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    document.body.style.color = 'white';
    showAlert("Dark mode has been enabled","success")
    document.title = "TextUtils - Dark Mode";
  } else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    showAlert("Light mode has been enabled","success")
    document.title = "TextUtils - Light Mode";
  }
};

  return (
    <>
      {/*<Navbar title="TextUtils" abouttext="About TextUtils" />*/}
      {/*<Navbar />*/}
      <Router>
      <Navbar title="TextUtils" abouttext="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About mode={mode}/>} />
          <Route exact path="/" element={<TextForm showAlert = {showAlert} heading="Enter the text to analyze" mode={mode}/>}/>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      {/*<About mode={mode}/>*/}
      </div>
      </Router>
    </>
  );
}

export default App;
