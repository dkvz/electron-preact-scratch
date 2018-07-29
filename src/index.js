const { h, render } = require('preact');
const Clock = require('../dist/clock');
const Vue1 = require('../dist/vue1');

render((
    <div id="foo">
        <Vue1 />
    </div>
), document.body);
