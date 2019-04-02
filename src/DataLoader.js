import { Component } from 'react';

class DataLoader extends Component {
	state = { data: [] }

	componentDidMount() {
		return fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(data => this.setState({ data }));
	}

	render() {
		// Con la prop 'render' se puede pasar fácilmente los datos al componente App como función
		return this.props.render(this.state.data);
	}
}

export default DataLoader;