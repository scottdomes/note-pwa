import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
				<div className="header">
					<h1>Notes</h1>
					<Link to="/add">
						<button className="add">Add Note</button>
					</Link>
				</div>
				{
					this.state.notes.map(note => {
						return (
							<Link to={`/notes/${note.id}`} key={note.id}>
								<h3>{note.title}</h3>
								<p>{note.body}</p>
							</Link>
						)
					})
				}
			</div>
		);
	}
}