var React = require('react');

var StartButton = React.createClass({

	render: function(){
		return (
			<div className="row btn-container">
				<button className="btn">开始摇奖</button>
			</div>
		)
	}
});

module.exports = StartButton;