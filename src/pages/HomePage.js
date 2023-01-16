import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
	const [advocates, setAdvocates] = useState([]);
	const [total, setTotal] = useState(0);
	const [pagination, setPagination] = useState(null);
	const [results, setResults] = useState(null);
	useEffect(() => {
		getData();
	}, []);

	const getData = async (query = '') => {
		const res = await axios.get(
			`https://cados.up.railway.app/advocates/?query=${query}`
		);
		setAdvocates(res.data.advocates);
		setTotal(res.data.total);
		setPagination(res.data.pagination);
		setResults(res.data.pagination.results_found);

		console.log(res.data.pagination.results_found);
	};
	const searchData = (e) => {
		e.preventDefault();
		const query = e.target.query.value;
		getData(query);
	};

	return (
		<div className='home_page'>
			<Link to='/'>
				<h1>TwitterAPI</h1>
			</Link>

			<div className='home_page_header'>
				<h2>Search {total} Twitter Accounts of Developer Advocates</h2>
				<p>{results} Developer Advocates Found</p>
			</div>
			<div className='form_search_wrapper'>
				<form onSubmit={searchData} id='form_search'>
					<input
						type='text'
						name='query'
						placeholder='Search Advocates....'
					/>
					<input
						type='submit'
						value='Search'
						className='btn_primary'
					/>
				</form>
			</div>

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
						<a href={advocate.twitter} target='_blank'>
							@{advocate.username}
						</a>
						<p className='bio_preview'>{advocate.bio}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default HomePage;
