import './App.css';
import Navbar from './components/Navbar';
import {Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import MyNotes from './components/MyNotes';
import { useState } from 'react';
import NoteState from './context/Notes/NoteState';
import Alert from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';
// eslint-disable-next-line
import Notec from './components/Notec.css'


function App() {
  const [alert,setalert]=useState(null)
  const [mode,setMode]=useState('light')
  const [mybtn,setmybtn]=useState("Enable Light mode")
  const showAlert=(message,type)=>{
        setalert({
          msg:message,
          type:type
        })
        setTimeout(()=>{
          setalert(null)
      }, 3000);
      
  }

  const toggleMode=()=>{
    if(mode==='dark'){
       setMode('light');
       document.body.style.backgroundColor='white'
      //  document.body.style.color='white'
       setmybtn("Enable Dark mode")
       showAlert("Light mode has been enabled","success")
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#112438'
      // document.body.style.color='white'
      setmybtn("Enable Light mode")
      showAlert("Dark mode has been enabled","success")
    }
}


  return (
    <>
    <NoteState>
    <Navbar  mode={mode} toggleMode={toggleMode} mybtn={mybtn}></Navbar>
    <Alert alert={alert}/>
    <div className="container">
    <Routes>
          <Route exact path="/" element={<Home showAlert={showAlert} mode={mode}/>} />
      <Route exact path="/about" element={<About  mode={mode}/>} />
      <Route exact path="/notes" element={<MyNotes mode={mode}/>} />
      <Route exact path="/login" element={<Login showAlert={showAlert} mode={mode}/>} />
      <Route exact path="/signup" element={<Signup showAlert={showAlert} mode={mode}/>} />
      </Routes>
      </div>
      </NoteState>
      <footer>
          <img src="https://res.cloudinary.com/djkn56f5y/image/upload/v1686332547/taking-notes-1_nhk5h0.jpg" alt="Footer"/>
        </footer>
    </>
  );
}

export default App;
