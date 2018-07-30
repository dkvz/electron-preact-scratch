const { h, render, Component } = require('preact');
const Editor = require('../dist/editor');
const renderer = require('../renderer');

class Vue1 extends Component {

  constructor(props) {
    super(props);
    this.editor = <Editor />;
  }

  trySaving() {
    renderer.sendSaveObj();
  }

  render() {
    return (
      <div>
        {this.editor}
        <div style={{'background-color':'orange', padding: '20px'}}>
          STATUSBAR lol
          <a href="#" style={{'float':'right'}} onClick={this.trySaving}>
            Save
          </a>
        </div>
      </div>
    );
  }

}

module.exports = Vue1;