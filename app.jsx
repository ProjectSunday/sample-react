var React = require('react');

var Head = React.createClass({
    render(){
        return <h1>I AM A REACT COMPONENT</h1>;
    }
});

React.render(<Head/>, document.getElementById("header"));