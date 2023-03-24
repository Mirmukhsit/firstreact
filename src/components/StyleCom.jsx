import React, {useState} from 'react'
import {Button, Container, NewButton, Rotate, Ahref} from './style'
import {ThemeProvider, createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body{
    background: ${(props)=>props.theme.bg};
    color: ${(props)=>props.theme.cl};
  }
`

function StyleCom() {
  const [light, setLight] = useState(false);
  const theme = {
    bg:light?'black':'white',
    cl:light?'white':'black',
  }
  const onChanges = () => {
    setLight(!light)
}
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Button>Click me</Button>
        <NewButton>New Button</NewButton>
        <Rotate>
          <Ahref href="#" >rotate</Ahref>
        </Rotate>
      </Container>
      <NewButton onClick={onChanges}>change lightness</NewButton>
    </ThemeProvider>
  )
}

export default StyleCom