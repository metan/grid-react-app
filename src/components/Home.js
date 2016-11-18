import React from 'react';
import { Link } from 'react-router';

const Home = () =>
	<div className="home">
		<p>Great home page.</p>
		<Link to="albums" className="btn">See albums >></Link>
	</div>

export default Home;
