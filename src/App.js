import React from 'react';
import './App.css';
import Header from './components/Header';
import Greeting from './components/exercise-components/Greeting';
// import { render } from '@testing-library/react';
import Count from './components/Count';

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


// export default class App extends React.Component {
//   // const [goOut, setGoOut] = React.useState("Yes")

//   /**
//    * A class component with state will ALWAYS save state in a class
//    * instance variable called `state`, which will always be an object.
//    * The individual values you save in state will be properties on
//    * the `state` object.
//    * 
//    * The simplest (and more modern) way to delcare new state in a
//    * class component is to just use a "class field" declaring state
//    * as an object, like you see below.
//    * 
//    * Then, throughout the rest of the component (e.g. inside the render
//    * method) you can access that state with `this.state.<yourPropertyHere>`
//    */
//   state = {
//     goOut: "Yes"
//   }



//   /**
//    * Any class methods you create that need to call the `this.setState`
//    * method (which is available to our component because we're extending
//    * React.Component) should be declared as an arrow function, for 
//    * reasons we will discuss soon. (Note: other class methods you
//    * want to make that DON'T use `this.setState` don't necessarily
//    * need to be declared as arrow function to work correctly)
//    */
  
//    toggleGoOut = () => {
//     // in functional components, this is going to be called as "setGoOut"
//     this.setState(prevState => {
//         return {goOut: prevState.goOut === "Yes" ? "No" : "Yes"}
//     })
//   }
//   render(){
//     return (
//       <div className="state">
//           <h1 className="state--title">Should I go out tonight?</h1>
//           <div className="state--value" onClick={this.toggleGoOut}>
//               <h1>{this.state.goOut}</h1>
//           </div>
//       </div>
//     ) 
//   }

// }


export default class App extends React.Component{
  render(){
    return(
      <div className="app">
        <Count/>
      </div>
    )
  }
}