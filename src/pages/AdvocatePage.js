import React from 'react';
import { useParams } from 'react-router-dom';

const AdvocatePage = () => {
	const params = useParams().username;

	return (
		<div>
			<h1>Advocate Page {params}</h1>
		</div>
	);
};

export default AdvocatePage;
