const { h, render, Component } = require('preact');
const renderer = require('../renderer.js');

class Editor extends Component {

  constructor(props) {
    super(props);
    this.state.text = '';
    renderer.registerSave(this.getValue.bind(this));
    renderer.registerSaveObject(this.state);
  }

  getValue() {
    return this.state.text;
  }

  sendSaveEvent() {
    console.log('Called sendSaveEvent in editor component');
    renderer.sendSave();
  }

  sendSaveObj() {
    renderer.sendSaveObj();
  }

  render() {
    return (
      <div>
        <textarea 
          style={{width: '100%'}}
          onInput={(e) => this.setState({text: e.target.value})}>
        </textarea>
        <div style={{padding: '30px'}}>
          {this.state.text}
        </div>
        <div style={{padding: '30px'}}>
          <button onClick={this.sendSaveEvent}>Save</button>
          <button onClick={this.sendSaveObj}>Save Obj</button>
        </div>
      </div>
    );
  }

}

module.exports = Editor;