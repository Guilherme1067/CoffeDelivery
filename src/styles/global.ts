import { createGlobalStyle } from "styled-components";
import styled from "styled-components";


export const Container = styled.div`
  
    display: flex;
    flex-direction: column;
    padding: 2rem 22rem;
`
export const GlobalStyle = createGlobalStyle`


  * {
    margin: 0;
    padding: 0;
  }

  body {
    background: ${(props) => props.theme['background']};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea,button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  input {
    background: ${(props) => props.theme['base-input']}
  }

  label {
    color: ${(props) => props.theme['base-label']}
  }
`