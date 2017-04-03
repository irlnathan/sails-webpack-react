// var React = require('react');
// var Component = require('react').Component;
// var ReactDOM = require('react-dom');

// You could use es6 module syntax instead
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Require the styles for this page.  This will cause the `homepage.bundle.css` file
// to be generated.  Note that you can require multiple .less or .css files here, and
// they will _all_ be bundled together into `homepage.bundle.css` (the name is based
// on the name of this JavaScript file).
require('../styles/homepage.less');

// Require the sockets.js file if you want to be able to use the socket client to
// do things like `io.socket.get()` inside of this script.
var io = require('../dependencies/sockets.js');

// Using a class to create a component
export default class SailsReact extends Component {
  render() {
    return (
      <div>
        <h1>Hello Sails-React!</h1>
      </div>
    );
  }
}

// Using createClass to create Component
// var SailsReact = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <h1>Hello Sails-React!</h1>
//       </div>
//     );
//   }
// });

// Function React Component
// const SailsReact = () => {
//   return (
//     <div>
//       <h1>Hello Sails-React!</h1>
//     </div>
//   )
// };

ReactDOM.render(
  <SailsReact/>,
  document.getElementById('app')
);
