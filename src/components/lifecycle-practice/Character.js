import React from "react";

export default class Character extends React.Component{
  constructor(){
    super();
    this.state = {
      character:{}
    }

    this.getCharacter = this.getCharacter.bind(this);
  }

      
  /**
   * Goal: get the first character from the Star Wars 
   * API and display the name on the screen
   */

  // Run code inside this function only on the first render
  // API calls are a common example to make use of componentDidMount

  // This is similar to useEffect with an empty array as its dependency
  componentDidMount(){
    console.log("componentDidMount");
    fetch("https://swapi.dev/api/people/1")
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => this.getCharacter(data))
  }

  getCharacter(data){
    this.setState({character: data})
  }

  render(){
    console.log("render");
    return(
      <h1>Hello {this.state.character.name}</h1>
    );
  }
}