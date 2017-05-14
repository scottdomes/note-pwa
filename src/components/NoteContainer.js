import React, { Component } from 'react';
import firebase from 'firebase';

export default class NoteContainer extends Component {
	state = { note: {} }
	componentDidMount() {
		firebase.database().ref('/notes/' + this.props.match.params.id).once('value').then(snapshot => {
		  this.setState({ note: snapshot.val() })
		});
	}

	render() {
		return (
			<div>
				<h1>NoteContainer</h1>
				<h1>{this.state.note.title}</h1>
				<p>{this.state.note.body}</p>
			</div>
		);
	}
}