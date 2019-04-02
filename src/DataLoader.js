import React, { useState, useEffect } from 'react';

const DataLoader = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(data => setData(data))
	});

	return (
		<div>
			<ul>
				{data.map(el => <li key={el.id}>{el.title}</li>)}
			</ul>
		</div>
	);
}

export default DataLoader;