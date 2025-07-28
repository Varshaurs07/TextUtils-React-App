import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar title="TextUtils" abouttext="About TextUtils" />
      {/*<Navbar />*/}
      <div className="container my-3">
      <TextForm heading="Enter the text to analyze"/>
      </div>
    </>
  );
}

export default App;
