import styled from "styled-components";
import { useState } from "react";


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    
`

const Text = styled.textarea`
    color: #0A3871;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    font-family: Inter;
    width: 577px;
    height: 80%;
    background: none;
    outline: none;
    border: none;
    overflow: hidden;
    resize: none;
    word-break: break-all;
    
    
`

const Input = () =>{

    const [text, setText] = useState("");

    
    return <Container>
        <Text 
            type="text" 
            placeholder="Ingrese el texto aqui"
            value={text}
            onChange={(e)=> setText(e.target.value)}></Text>
    </Container>
}

export default Input