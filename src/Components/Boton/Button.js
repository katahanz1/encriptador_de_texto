import styled from "styled-components";

const Root = styled.button`
  border-radius: 24px;
  border: 1px solid #0a3871;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 24px;
  text-align: center;
  font-size: 16px;
  color: #0a3871;
  font-family: Inter;
  border: 1px solid #0A3871;
  background-color: ${(p) => p.BackgroundColor};
  width: 328px;
  
`;

const Button = ({text, Encripta}) => {
  return <Root>
          {text}
  </Root>
}


export default Button

