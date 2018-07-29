const { h, render, Component } = require('preact');

class Editor extends Component {

  constructor(props) {
    super(props);
    this.state.text = '';
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
      </div>
    );
  }

}

module.exports = Editor;