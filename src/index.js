const { h, render } = require('preact');
const Clock = require('../dist/clock');

render((
    <div id="foo">
        <span>Hello, world!</span>
        <div>Et aussi une horloge:</div>
        <Clock /><br />
        <button onClick={ e => alert("hi!") }>Click Me</button>
    </div>
), document.body);
