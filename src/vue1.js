const { h, render, Component } = require('preact');
const Editor = require('../dist/editor');
const Metaform = require('../dist/metaform');
const renderer = require('../renderer');

class Vue1 extends Component {

  constructor(props) {
    super(props);
    this.state.hideEd = false;
    this.state.meta = {
      title: 'Super titre',
      userId: 22,
      value1: 'First value',
      value2: 'Second value'
    };
    this.hideEditor = this.hideEditor.bind(this);
    this.titleChanged = this.titleChanged.bind(this);
    this.userIdChanged = this.userIdChanged.bind(this);
    this.changeTheTitle = this.changeTheTitle.bind(this);
  }

  trySaving(e) {
    renderer.sendSaveObj();
  }

  hideEditor() {
    this.setState({'hideEd': !this.state.hideEd});
  }

  titleChanged(val) {
    console.log('titleChanged fired: ' + val);
    let meta = Object.assign({}, this.state.meta);
    meta.title = val;
    this.setState({meta});
  }

  // Should be refactored with the previous function.
  userIdChanged(val) {
    let meta = Object.assign({}, this.state.meta);
    meta.userId = val;
    this.setState({meta});
  }

  changeTheTitle() {
    let meta = Object.assign({}, this.state.meta);
    meta.title = 'Je change le titre';
    this.setState({meta});
  }

  render() {
    return (
      <div>
        {!this.state.hideEd && <Editor />}
        <Metaform 
          userId={this.state.meta.userId} 
          title={this.state.meta.title} 
          titleChanged={this.titleChanged}
          userIdChanged={this.userIdChanged}
          />
        <div style={{'background-color': 'orange', padding: '20px'}}>
          {this.state.meta.title}
          <a href="#" style={{'float':'right'}} onClick={this.trySaving}>
            Save
          </a>
        </div>
        <button onClick={this.hideEditor}>Toggler l'éditeur</button>
        <button onClick={this.changeTheTitle}>Change the title</button>
        <button onClick={_ => {
          const st = this.state.meta;
          st.value2 = 'JE CHANGE';
          this.setState({meta: st});
        }}>
          Change value2 in an object: {this.state.meta.value2}
        </button>
      </div>
    );
  }

}

module.exports = Vue1;