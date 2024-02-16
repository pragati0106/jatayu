import { BrowserRouter , Route,Routes } from 'react-router-dom';
import Detail from './Component/detail/detail';
import Home from "./Home"; 
import { useState,useEffect } from 'react';
function App() {
  const [theme,setTheme]=useState(localStorage.getItem('theme')? localStorage.getItem("theme"):"light");
  useEffect(()=>{
      localStorage.setItem("theme",theme);
      const localTheme=localStorage.getItem("theme");
      console.log(localTheme);
      document.querySelector("html").setAttribute("data-theme",localTheme)
  },[theme])
  return (
    <BrowserRouter>
      
         <Routes>
            <Route path="/" exact element={<Home theme={theme} setTheme={setTheme}/>} />
            <Route path="/detail/:index" element={<Detail  theme={theme} setTheme={setTheme}/>} />
            </Routes>
    </BrowserRouter>
  );
}

export default App;
