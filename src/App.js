import './App.css';
import Icon from './Components/Iconos/Icon';
import logo from "./Images/Logo.svg"
import Input from './Components/Input/Index';
import Container from './Components/Cotnainer/Button';
import { useState } from 'react';





function App() {

  
  const [text, setText] = useState("");

  const handleChange = (e) =>
  {
    setText(e.target.value)
  }
  
  return (
    <div>
      <Icon src={logo} alt="logo"/>
      <Input handleChange={handleChange} text={text}/>
      <Container text={text}/>
    </div>
  );
}

export default App;
