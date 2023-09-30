import './App.css';
import Icon from './Components/Iconos/Icon';
import logo from "./Images/Logo.svg"
import Input from './Components/Input/Index';
import Container from './Components/Cotnainer/Button';
import Encriptados from './Components/Encriptados/Index';
import { useState } from 'react';



function App() {

  
  const [text, setText] = useState("");
  const [palabraEncriptada, setPalabraEncriptada] = useState("")


  const handleChange = (e) =>
  {
    setText(e.target.value)
  }

  
const encript = () =>{

  let palabra = "";
  for(let i = 0; i < text.length; i++)
  {
    if(text[i] === "e")
    {
      palabra += "enter"
    }else if(text[i] === "i")
    {
      palabra += "imes"
    }
    else if(text[i] === "a")
    {
      palabra += "ai"
    }else if(text[i] === "o")
    {
      palabra += "ober"
    }else if(text[i] === "u")
    {
      palabra += "ufat"
    }else{
      palabra+=text[i]
    }
    setPalabraEncriptada(palabra)
  }

  console.log(palabraEncriptada)
  
}
  
  return (
    <div>
      <Icon src={logo} alt="logo"/>
      <Input handleChange={handleChange} text={text}/>
      <Container  encript={encript}/>
      <Encriptados ></Encriptados>
    </div>
  );
}

export default App;
