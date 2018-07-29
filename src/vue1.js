const { h, render, Component } = require('preact');
const Editor = require('../dist/editor');

class Vue1 extends Component {

  render() {
    return (
      <div>
        <Editor />
        <div style={{'background-color':'orange', padding: '20px'}}>STATUSBAR lol</div>
      </div>
    );
  }

}

module.exports = Vue1;