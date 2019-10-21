import React from 'react';

class Controls extends React.Component {

  handleKeyboardEvents = (event) => {
    switch (event.key) {
      case 'ArrowLeft':  this.props.turnLeft();  break;
      case 'ArrowRight': this.props.turnRight(); break;
      case 'ArrowUp':    this.props.morePower(); break;
      case 'ArrowDown':  this.props.lessPower(); break;
      case ' ':          this.props.fire();      break;
      default:

    }
  }

  componentDidMount = () => {
    document.addEventListener('keydown', this.handleKeyboardEvents );
  }

  render(){
    if ( ! this.props.player ) return null;
    return (
      <div className="Controls">
        <label for="Name">Name</label><span className="Name">{this.props.player.name}</span>
        <label for="Health">Health</label><span className="Health">{this.props.player.health}</span>
        <label for="Angle">Angle</label>
          <span className="Angle">
            <input type="number" className="Angle" value={this.props.player.angle}/>
            <button onClick={this.props.turnLeft}>&lt;</button>
            <button onClick={this.props.turnRight}>&gt;</button>
          </span>
        <label for="Power">Power</label>
        <span className="Power">
        <input type="number" className="Angle" value={this.props.player.power}/>
          <button onClick={this.props.lessPower}>-</button>
          <button onClick={this.props.morePower}>+</button>
        </span>
        <button id="fire" onClick={this.props.fire}>Fire</button>
      </div>
    );
  }
}

export default Controls;
