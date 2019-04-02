import React, { useState, useEffect } from 'react';

const DataLoader = () => {
	const [data, setData] = useState([]);

	/** useEffect serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount
	 * If you call useEffect without the last empty array you would see an infinite loop. And for solving this “bug” you would need to pass an EMPTY ARRAY as a second argument to useEffect
	 */
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(data => setData(data))
	}, []); // << super important array

	return (
		<div>
			<ul>
				{data.map(el => <li key={el.id}>{el.title}</li>)}
			</ul>
		</div>
	);
}

export default DataLoader;