import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { render } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BoxSeries from './components/series/Box_series';
import Navbar from './components/Nav_bar'


class App extends Component {

  render(){
    return( 
      <div>
        <Navbar/>
        <BoxSeries/>
      </div>
    )
  }
}
  
export default App;

// //componente do react
{/* <div className="App"> */}

/* <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
        Hello ReactJS
      </header> */

      //para mostrar o processo de criação
  // componentWillMount(){
  //   console.log('estou sendo montado')
  // }


  // console.log('Estou sendo renderizado na tela')
  //o retorno (sendo ele um xml/html) é transhtmlFormado em js