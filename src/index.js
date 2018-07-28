const { h, render } = require('preact');

render((
    <div id="foo">
        <span>Hello, world!</span>
        <button onClick={ e => alert("hi!") }>Click Me</button>
    </div>
), document.body);