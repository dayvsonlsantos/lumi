import React, { Component } from "react";
import "./Components/ToggleButton/toggleButton.module.css";
import ToggleButton from "./Components/ToggleButton/ToggleButton";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    //mudar o state
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
      
    }));
  }


  render() {
    
    return (
      <>
      
      <ToggleButton event={this.handleClick} isToggleOn={this.state.isToggleOn}/>
      
      {this.state.isToggleOn ? console.log (this.state.isToggleOn) : console.log (this.state.isToggleOn)}
      
      </>
    );
  }
}

export default App;
