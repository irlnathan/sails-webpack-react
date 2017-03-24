var React = require('react');
var ReactDOM = require('react-dom');

// Require the styles for this page.  This will cause the `homepage.bundle.css` file
// to be generated.  Note that you can require multiple .less or .css files here, and
// they will _all_ be bundled together into `homepage.bundle.css` (the name is based
// on the name of this JavaScript file).
require('../styles/homepage.less');

// Require the sockets.js file if you want to be able to use the socket client to
// do things like `io.socket.get()` inside of this script.
var io = require('../dependencies/sockets.js');

var SailsReact = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello Sails-React!</h1>
      </div>
    );
  }
});

ReactDOM.render(
  <SailsReact/>,
  document.getElementById('app')
);
