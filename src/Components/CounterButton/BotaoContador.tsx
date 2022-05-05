import React from 'react';
import './BotaoContador.css'

import {Button} from 'reactstrap'

function BotaoContador() {
  return (
    <div className='App'>
        <div className='ButtonCounterContainer d-flex align-items-center mt-5'>
            <h4 className='ButtonText'>
            Counter Button:
            </h4>
            <Botao />
        </div>
    </div>  )
}
class Botao extends React.Component {
  state = {
    count: 0
  };
  PlusOne = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  Reset = ()=> {
    this.setState({
        count: this.state.count = 0
    })
  }
  MinusOne = () => {
    this.setState({
      count: this.state.count - 1
    })
  }
  render() {
    return (
      <div className='Container'>
        <div className='Counter'>
          {this.state.count}
        </div>
        <div className='ButtonContainer'>
        <Button
          className='Button rounded-pill'
          onClick={this.PlusOne}
        > 
            +1
        </Button>
        <Button 
            className='Button rounded-pill'
            onClick={this.Reset}
        >
            Reset
        </Button>
        <Button
          className='Button rounded-pill'
          onClick={this.MinusOne}
        > 
            -1
        </Button>
        </div>
      </div>
    )
  };
}

export default BotaoContador
