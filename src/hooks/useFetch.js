import { useEffect, useRef, useState } from 'react';
import { FetchOptions } from '../constants/api';

const fetchOptions = new FetchOptions();

export const useFetch = () => {
	const [data, setData] = useState(null);
	const [url, setUrl] = useState(null);
	const [options, setOptions] = useState(fetchOptions.getOptions());
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const cache = useRef({});

	useEffect(() => {
		if (!url) return;

		const fetchData = async () => {
			setIsLoading(true);

			if (cache.current[url]) return;

			try {
				const response = await fetch(url, options);
				const data = await response.json();

				if (data.ok) {
					cache.current[url] = data;
					setData(data);
				} else {
					setError(data.message);
				}
			} catch (e) {
				setError(e.message);
			}

			setIsLoading(false);
		};

		fetchData();
	}, [url, options]);

	const setFetch = (url, options) => {
		setUrl(url);

		if (options) {
			setOptions(options);
		}
	};

	return [{ data, isLoading, error }, setFetch];
};
