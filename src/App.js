// import { useState } from 'react';
import React, { useState } from 'react';  
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert'; 
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  // const [yellowMode, setyellowMode] = useState('light');


  const showAlert = (message, type) =>{
      setAlert({
        msg:message,
        type: type
      })
      setTimeout(()=>{
        setAlert(null);
      }, 1500)
  }
  // const toggleyellowMode= ()=>{
  //   if(yellowMode===mode){
  //     setyellowMode('#FFE550')
  //     document.body.style.backgroundColor='#FFE550';
  //     document.body.style.color ='black';
  //     showAlert("Yellow Mode has been enabled","success");
  //     document.title = 'TextUtils - Yellow Mode';

  //   }
  //   else{
  //     setyellowMode('light')
  //     document.body.style.backgroundColor ='white';  
  //     document.body.style.color ='black';
  //     showAlert("Yelow Mode disabled","warning");
  //     document.title = 'TextUtils - Light Mode';

  //   }
  // };
  const toggleMode= ()=>{
    if(mode==='light'){
        setMode('dark') 
        document.body.style.backgroundColor ='black';
        document.body.style.color ='white';
        showAlert("Dark mode has been enabled", "success");
        document.title = 'TextUtils - Dark Mode';

    }
    else{
      setMode('light')   
      document.body.style.backgroundColor ='white';  
      document.body.style.color ='black';
      showAlert("light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  };


  return (
    <>
      {/* <Navbar title="TextUtils2" aboutText="About TextUtils"/> */}
      <Router>
      <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      
      <Routes>
        {/* /users --> component 1
        /user/home --> component 2 */}
        
          <Route exact path="/about" element={<About mode={mode} />} />
            
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter The text to analyze below"/>
} />
      </Routes>
      
      {/* <About/>  */}
      </div>  
      </Router>
    </>
  );
}

export default App;
