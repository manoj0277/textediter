import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Alert from './components/Alert';
import {
  BrowserRouter ,
  Route,
  Routes}
 from "react-router-dom";

// import React ,{useState}from 'react';
function App() {
  const [mode, setMode] = useState(`light`)
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);

  }

  const toggleMode = () => {
    if (
      mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert(": Darkmode has been enabled", "success");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert(": Lightmode has been enabled", "success");
    }
  }


  return (
    <>
      <BrowserRouter>
        <Navbar title="Textediter" mode={mode} toggleMode={toggleMode} Home="Home" About="About Us" />
        <Alert alert={alert} />
        <div className='container'>
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}>
            </Route>
            <Route  exact path="/" element={<Textarea heading="Enter the text to analyze"   mode={mode} showAlert={showAlert}/>}></Route>
          </Routes>
        </div>
       </BrowserRouter>
    </>
  )
}

export default App;
