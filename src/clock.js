const { h, render, Component } = require('preact');

class Clock extends Component {
    render() {
        let time = new Date().toLocaleTimeString();
        return <span>{ time }</span>;
    }
}

module.exports = Clock;
// render an instance of Clock into <body>:
//render(<Clock />, document.body);