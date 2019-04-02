import { useState, useEffect } from 'react';

/** A custom hook is a JavaScript function whose name starts with “use”, according to the React documentation
 * You cannot return a Promise from useEffect (If I wanted to use async and await inside it)
 */
export default function useFetch(url) {
	const [data, setData] = useState([]);

	/** To use async and await, I have to write a function before */
	async function getData() {
		const response = await fetch(url);
		const data = await response.json();
		setData(data);
	}

	useEffect(() => getData(), []);

	return data;
}