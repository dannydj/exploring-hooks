import React from 'react';
import useFetch from './useFetch';

const DataLoader = (props) => {
	const data = useFetch('https://jsonplaceholder.typicode.com/posts');

	return (
		<div>
			<ul>
				{data.map(el => <li key={el.id}>{el.title}</li>)}
			</ul>
		</div>
	);
}

export default DataLoader;