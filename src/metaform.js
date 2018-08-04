const { h, Component } = require('preact');

class Metaform extends Component {

  constructor(props) {
    super(props);
    // This component is not supposed to have state, since it's
    // propagating stuff upwards.
  }

  render() {
    return (
      <div>
        <div><input type="text" value={this.props.title} onInput={(e) => this.props.titleChanged(e.target.value)} /></div>
        <div><input type="text" value={this.props.userId} onInput={(e) => this.props.userIdChanged(e.target.value)} /></div>
      </div>
    );
  }

}

module.exports = Metaform;