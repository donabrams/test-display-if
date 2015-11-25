import React from 'react';
import ReactDOM from 'react-dom';


var t = true;
var f = false;

console.log(ReactDOM.renderToString(<div><div display-if={t}>t</div><div display-if={f}>f</div></div>));
