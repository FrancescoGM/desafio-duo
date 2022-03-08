import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    @media (max-width: 1280px) {
      font-size: 93.75%;
    }
    @media (max-width: 992px) {
      font-size: 87.5%;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fontFamilies.highlight};
  }

  body{
    font-family: ${({ theme }) => theme.fontFamilies.default};
    color: ${props => props.theme.colors.neutralColor['800']};
    background-color: ${props => props.theme.colors.neutralColor['100']};
  }

  body main {
    margin-top: 80px;
  }

  body, input, textarea, select, button {
    font-family: ${({ theme }) => theme.fontFamilies.default};
    font-size: 1rem;
  }

`
