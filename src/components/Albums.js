import React from 'react';
import _ from 'lodash';
import axios from 'axios';
import dateFormat from 'dateformat';

import { Link } from 'react-router';

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			albums: []
		}
	}

	componentWillMount() {
			setTimeout(() => {
				axios.get("/data.json")
					.then((response) => {
						this.setState({albums: response.data, loading: false});
					}); 
				}, 2000);
	}

	renderAlbums() {
		return _.map(this.state.albums, (album, index) =>
				<tr key={index}>
					<td>{dateFormat(album.production_date, 'dd.mm.yyyy')}</td>
					<td>{album.artist}</td>
					<td>{album.title}</td>
					<td><img src={album.cover ? 'src/img/' + album.cover : 'src/img/default.jpg'} /></td>
				</tr>
		);
	}

	sortByColumn(key) {
		this.setState({albums: _.sortBy(this.state.albums, key)});
	}

	render() {

		let wrapperClass = this.state.loading ? 'albums loading' : 'albums';

		return (
			<div className={wrapperClass}>
				<table>
					<thead>
						<tr>
							<th onClick={this.sortByColumn.bind(this, 'production_date')}>date</th>
							<th onClick={this.sortByColumn.bind(this, 'artist')}>artist</th>
							<th onClick={this.sortByColumn.bind(this, 'title')}>title</th>
							<th>cover</th>
						</tr>
					</thead>
					<tbody>
						{this.renderAlbums()}
					</tbody>
				</table>
			</div>
		);
	}
}