import './App.css';
import Icon from './Components/Iconos/Icon';
import logo from "./Images/Logo.svg"
import Input from './Components/Input/Index';
//import Button from './Components/Button';

function App() {
  return (
    <div>
      <Icon src={logo} alt="logo"/>
      <Input/>
    </div>
  );
}

export default App;
