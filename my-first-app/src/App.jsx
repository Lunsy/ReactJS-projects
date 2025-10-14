// import { useState } from 'react'
import { Component } from 'react'
import './App.css'

const Header = () => {
  return <h2>Hello world!</h2>
}

// const Field = () => {
//   const holder = "Enter here";
//   const styledField = {
//     width: '300px',
//     height: '40px',
//   };
//   return <input
//     placeholder={holder}
//     type="text"
//     style={styledField} />
// }

class Field2 extends Component {
  render() {
    const holder = "Enter here";
    const styledField = {
      width: '300px',
      height: '40px',
    };
    return <input
      placeholder={holder}
      type="text"
      style={styledField} />
  }
}

function Btn() {
  const text = 'Log in';
  const logged = false;

  return <button>{logged ? 'Enter' : text}</button>
}

function App() {


  return (
    <>
      <Header />
      <Field2 />
      <Btn />
    </>
  )
}

export { Header };
export default App
