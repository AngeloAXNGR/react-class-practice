import React from "react"

/**
 * Challenge: Convert this stateful function component
 * to a stateful class component. At the end, everything
 * should work exactly the way it does now.
 * 
 * 1. Change the syntax to a class component
 * 2. Declare state in the class component that
 *    can hold the value of `count`
 * 3. Update the add and subtract methods so you won't
 *    get the error about calling `setState` on undefined
 * 4. Update the values in the render method to account
 *    for the changeover to a class component
 */

// export default function Count() {
//     const [count, setCount] = React.useState(0)
    
//     function add() {
//         setCount(prevCount => prevCount + 1)
//     }
    
//     function subtract() {
//         setCount(prevCount => prevCount - 1)
//     }
    
//     return (
//         <div className="counter">
//             <button className="counter--minus" onClick={subtract}>–</button>
//             <div className="counter--count">
//                 <h1>{count}</h1>
//             </div>
//             <button className="counter--plus" onClick={add}>+</button>
//         </div>
//     )
// }


/**
 * Challenge: convert the class fields and arrow methods
 * to make use of the class `constructor` method.
 * 
 * 1. Add a constructor() method
 * 2. Call super()
 * 3. Initialize your state inside the constructor
 * 4. Convert your arrow function class methods back to
 *    regular class methods
 * 5. Bind those class methods in the constructor method
 */

export default class Count extends React.Component{
  // state = {
  //   count: 0,
  // }

  // add = () =>{
  //   this.setState(prevState => {
  //     return {count: prevState.count + 1}
  //   })
  // }

  // subtract = () =>{
  //   this.setState(prevState => {
  //     return {count: prevState.count - 1}
  //   })
  // }

  constructor(){
    super();
    this.state = {
      count:0
    }

    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
  }


  add() {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  }

  subtract() {
    this.setState(prevState => {
      return {count: prevState.count - 1}
    })
  }


  render(){
    return(
      <div className="counter">
        <button className="counter--minus" onClick={this.subtract}>–</button>
        <div className="counter--count">
            <h1>{this.state.count}</h1>
        </div>
        <button className="counter--plus" onClick={this.add}>+</button>
      </div>
    )
  }
}
