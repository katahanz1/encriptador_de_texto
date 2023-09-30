import styled from "styled-components"
import imagen from "../../Images/Muñeco.svg"


const Contenedor = styled.div`
    display: flex;
    position: relative;
    left: 1750px;
    bottom: 450px;
    justify-content: center;
    align-items: center;
    height: 944px;
    width: 400px;
    background-color: #ffffff;
    border-radius: 32px;
    box-shadow: 0px 24px 32px -8px rgba(0, 0, 0, 0.08);
    
`

const Imagen = styled.img`
    width: 336px;
    height: 304px;

`

const Encriptados = () =>
{
    return <Contenedor>
        <Imagen src={imagen} alt="muñeco"></Imagen>
    </Contenedor>
}

export default Encriptados