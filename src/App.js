
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import About from './Components/About';
import { BrowserRouter as Router,
  Route,
  Routes,
 } from 'react-router-dom';



function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }
  const red=()=>{
      document.body.style.backgroundColor='red'; 
      showAlert("Red Mode has been Enabled","success") 
  }
  const yellow=()=>{
      document.body.style.backgroundColor='yellow';
      showAlert("Yellow Mode has been Enabled","success")  
  }
  const green=()=>{
    document.body.style.backgroundColor='green';
    showAlert("Green Mode has been Enabled","success")  
  }
  const toggleMode =()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#303141';
      showAlert("Dark Mode has been Enabled","success")
      document.title='TextUtils - DarkMode';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been Enabled","success")
      document.title='TextUtils - LightMode';
    }
  }
  return (
    <>
    <Router>
    <Navbar mode={mode}  red={red} yellow={yellow} green={green} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3" >
      <Routes>
          <Route path="/about" element={<About/>} exact/>
          <Route path="/" element={<TextForm heading="Enter Text Here" mode={mode}/>} exact/>
            {/* <TextForm heading="Enter Text Here" mode={mode}/>  */}
      </Routes>  
    </div>
    </Router>
    </>
  );
}

export default App;
