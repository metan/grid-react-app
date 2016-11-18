import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Albums from './components/Albums'; 

import './style/main.styl';

const app = document.getElementById('app');

ReactDom.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="albums" component={Albums} />
		</Route>
	</Router>,
app)