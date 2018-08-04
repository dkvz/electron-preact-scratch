const { h, render, Component } = require('preact');
const renderer = require('../renderer');

class Buttonator extends Component {

  showMeTheValue() {
    console.log(renderer.counter);
  }

  render() {
      return <button onClick={this.showMeTheValue}>Show me the value</button>;
  }
}

module.exports = Buttonator;