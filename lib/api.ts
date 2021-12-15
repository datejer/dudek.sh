import { useState, useEffect } from "react";

const URL = "/api/pinned?username=";

const fetchPinned = async (username: string) => {
	const response = await fetch(URL + username);
	const json = await response.json();
	return json;
};

const usePinned = (username: string) => {
	const [pinned, setPinned] = useState(new Array(6).fill({}));

	useEffect(() => {
		fetchPinned(username).then(setPinned);
	}, [username]);

	return { pinned };
};

export { URL, fetchPinned, usePinned };
