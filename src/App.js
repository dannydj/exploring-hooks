import React, { Component } from 'react';
import './App.css';
import DataLoader from './DataLoader';

class App extends Component {
	render() {
		return (
			<div className="App">
				<DataLoader render={data => (
					<div>
						<ul>
							{data.map(el => <li key={el.id}>{el.title}</li>)}
						</ul>
					</div>
				)} />
			</div>
		);
	}
}

export default App;
