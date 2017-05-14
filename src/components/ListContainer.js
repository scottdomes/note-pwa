import React, { Component } from 'react';
import firebase from 'firebase';

export default class ListContainer extends Component {
	state = { notes: [] }

	componentDidMount() {
		firebase.database().ref('/notes').once('value').then((snapshot) => {
			const notes = []
			snapshot.forEach(childSnapshot => {
				const value = childSnapshot.val()
				value.id = childSnapshot.key
		    notes.push(value);
		  });
		  this.setState({ notes })
		});
	}

	render() {
		return (
			<div>
				<h1>ListContainer</h1>
				{
					this.state.notes.map(note => {
						return (
							<div key={note.id}>
								<h3>{note.title}</h3>
								<p>{note.body}</p>
							</div>
						)
					})
				}
			</div>
		);
	}
}