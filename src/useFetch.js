import { useState, useEffect } from 'react';

/** A custom hook is a JavaScript function whose name starts with “use”, according to the React documentation */
export default function useFetch(url) {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(data => setData(data))
	}, []);

	return data;
}