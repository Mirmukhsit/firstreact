import React from 'react'
import Footer from './components/Footer'
import  {Navbar as NewNavbar}  from './components/Navbar'

function App() {
  return (
    <div>
      <NewNav title="this is Navbar">
        <h1>hello h1</h1>
        <h3>this is the beginnig of react</h3>
      </NewNav>
      <NewNav title="this is not first Navbar">
        <h4>thisis h4</h4>
        <h1>lasts titls</h1>
        <h1>lasts titls</h1>
        <h1>lasts titls</h1>
      </NewNav>
      <Footer title="footer">
        <h1>salom footer</h1>
      </Footer>
    </div>
  )
}


export default App