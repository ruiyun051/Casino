var React = require('react'),
	ReactDom = require('react-dom'),
	Bootstrap = require('bootstrap/dist/css/bootstrap.css'),
	StartButton = require('./components/StartButton.jsx');

ReactDom.render(
	<StartButton/>,
	document.getElementById('start-btn')
);