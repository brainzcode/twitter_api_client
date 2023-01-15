import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AdvocatePage = () => {
	const username = useParams().username;
	const [advocate, setAdvocate] = useState(null);
	useEffect(() => {
		const getData = async () => {
			const res = await axios.get(
				`https://cados.up.railway.app/advocates/${username}`
			);
			setAdvocate(res.data.advocate);
			console.log(res);
		};
		getData();
	}, [username]);

	return (
		<>
			{advocate && (
				<div>
					<h1>{advocate.username}</h1>
					<p>{advocate.bio}</p>
				</div>
			)}
		</>
	);
};

export default AdvocatePage;
