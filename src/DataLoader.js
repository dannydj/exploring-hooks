import { useState, useEffect } from 'react';

const DataLoader = (props) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(data => setData(data))
	}, []); // << super important array

	// React Hooks were born for a reason: sharing logic between components
	return props.render(data);
}

export default DataLoader;