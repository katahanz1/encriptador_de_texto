import styled from "styled-components";
import { useState } from "react";

const Boton = styled.button`
  border-radius: 24px;
  border: 1px solid #0a3871;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 24px;
  text-align: center;
  font-size: 16px;
  color: ${({encripta}) => encripta ? "#FFFFFF" : "#0A3871"};
  font-family: Inter;
  border: 1px solid #0A3871;
  background-color: ${({encripta}) => encripta ? "#0A3871" : "#D8DFE8"};
  width: 328px;
  
`;

const Cont = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  bottom: 30px;
  position: relative;
  top: 500px;
`

const Container = ({text}) => {

  const [palabraEncriptada, setPalabraEncriptada] = useState("")
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

    console.log(palabra)
    
  }

  
  return <Cont>
    <Boton encripta onClick={encript}>Encripta</Boton>
    <Boton >Desencripta</Boton>
    </Cont>
}


export default Container

