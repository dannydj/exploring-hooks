import React, { Component } from 'react';

class Button extends Component {
	state = { buttonText: 'Click me, please' }

	handleClick = () => {
		this.setState({ buttonText: 'Thanks, been clicked!' });
	}

	render() {
		const { buttonText } = this.state;
		return (
			<button onClick={this.handleClick}>{buttonText}</button>
		);
	}
}

export default Button;