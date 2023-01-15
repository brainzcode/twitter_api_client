import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
	const [advocates, setAdvocates] = useState([]);
	useEffect(() => {
		const getData = async () => {
			const res = await axios.get(
				'https://cados.up.railway.app/advocates/'
			);
			setAdvocates(res.data.advocates);
			console.log(res);
		};
		getData();
	}, []);

	return (
		<div className='home_page'>
			<h1>Twitter Accounts of Developer Advocates</h1>
			<div className='advocate_list'>
				{advocates.map((advocate, index) => (
					<div className='advocate_preview_wrapper' key={index}>
						<Link to={`/advocates/${advocate.username}`}>
							<img
								className='advocate_preview_image'
								src={advocate.profile_pic}
								alt='profile'
							/>
						</Link>
						<strong>{advocate.name}</strong>
						<a href={advocate.twitter} target='_blank'>@{advocate.username}</a>
                        <p className='bio_preview'>{advocate.bio}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default HomePage;
