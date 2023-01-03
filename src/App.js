import React from 'react';
import './App.css';
import Header from './components/Header';
import Greeting from './components/exercise-components/Greeting';
import Out from './components/exercise-components/Out';
import Count from './components/exercise-components/Count';
import Contact from './components/exercise-components/Contact';
import Character from './components/lifecycle-practice/Character';
import Form from './components/lifecycle-practice/Form';
import SWCharacter from './components/lifecycle-practice/SWCharacter';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


// class App extends React.Component{
//   render(){
//     return(
//       <div className="App">
//         <Header type="Class"/>
//         <Greeting/>
//       </div>
//     )
//   }
// }


export default class App extends React.Component{
  render(){
    return(
      <div className="app">
        {/* <Count/>
        <Out/>
        <Contact/> */}

        {/* <Character/> */}
        {/* <Form/> */}
        <SWCharacter/>
      </div>
    )
  }
}