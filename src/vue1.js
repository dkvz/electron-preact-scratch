const { h, render, Component } = require('preact');
const Editor = require('../dist/editor');
const renderer = require('../renderer');

class Vue1 extends Component {

  constructor(props) {
    super(props);
    this.state.hideEd = false;
    this.hideEditor = this.hideEditor.bind(this);
  }

  trySaving(e) {
    renderer.sendSaveObj();
  }

  hideEditor() {
    this.setState({'hideEd': !this.state.hideEd});
  }

  render() {
    return (
      <div>
        {!this.state.hideEd && <Editor />}
        <div style={{'background-color': 'orange', padding: '20px'}}>
          STATUSBAR lol
          <a href="#" style={{'float':'right'}} onClick={this.trySaving}>
            Save
          </a>
        </div>
        <button onClick={this.hideEditor}>Toggler l'éditeur</button>
      </div>
    );
  }

}

module.exports = Vue1;