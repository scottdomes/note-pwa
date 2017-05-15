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
				<div id="list-grid">
					{
						this.state.notes.map(note => {
							return (
								<Link to={`/notes/${note.id}`} key={note.id} className="note">
									<h3 className="note-title">{note.title}</h3>
									<p className="note-text">{note.body}</p>
								</Link>
							)
						})
					}
				</div>
			</div>
		);
	}
}