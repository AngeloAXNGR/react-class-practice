import React from "react";


export default class Header extends React.Component{
  render(){
    return(
      // How to use props in class components
      <header>{this.props.type} Component</header>
    )
  }
}