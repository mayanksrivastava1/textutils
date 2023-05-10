// import logo from './logo.svg';
import React ,{ useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); 
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled","success");
      document.title("Textutils - Dark MOde ")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success");
      document.title("Textutils - Light Mode")
    }  
  }
  return (

    <>
      {/* <Router> */}
      <Navbar title ="textutils" mode={mode} toggleMode = {toggleMode} abouttext = "About"/>
      <Alert alert={alert}/>
      <div className="container my-4">
      
      {/* <Switch> */}

          {/* <Route path='/about'>
            <About />
          </Route> */}

          {/* <Route path='/'> */}
            <TextForm showAlert={showAlert} heading="Enter the test to analyse"  mode={mode} /> 
          {/* </Route> */}

      {/* </Switch>  */}
      </div>
      {/* </Router> */}
      
      
    </> 

  );
}

export default App;

 