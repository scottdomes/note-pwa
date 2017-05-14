import React, { Component } from 'react';
import firebase from 'firebase';

export default class NoteContainer extends Component {
	componentDidMount() {
		firebase.database().ref('/notes/' + 1).once('value').then(function(snapshot) {
		  console.log(snapshot.val())
		});
	}

	render() {
		return (
			<div>
				<h1>NoteContainer</h1>
			</div>
		);
	}
}