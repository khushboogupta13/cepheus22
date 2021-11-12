import React, { Component } from 'react'
import "./Home.css"
import leftSymbol from "./assets/leftSymbol.svg"

export default class Home extends Component {
  render() {
    return (
      <div class="home">
        <p class="test"> Hello </p>
        <img src={leftSymbol}></img>
      </div>
    )
  }
}


