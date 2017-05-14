import React, { Component } from 'react';
import firebase from 'firebase';

export default class ListContainer extends Component {
	componentDidMount() {
		firebase.database().ref('/notes').once('value').then(function(snapshot) {
		  console.log(snapshot.val())
		});
	}

	render() {
		return (
			<div>
				<h1>ListContainer</h1>
			</div>
		);
	}
}