var React = require('react');

var App = React.createClass({

	render: function() {
		return (
			<div>
			<h1>{this.props.title}</h1>
			<p>Welcome to {this.props.title}</p>
			</div>
		);
	}

});

module.exports = App;