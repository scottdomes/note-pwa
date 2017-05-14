import React, { Component } from 'react';
import firebase from 'firebase';

export default class AddNoteContainer extends Component {
	state = { title: '', body: '' }

	handleSubmit = (e) => {
		e.preventDefault()
		const { title, body } = this.state
		firebase.database().ref('notes/' + 1).set({
	    title,
	    body
	  });
	}

	handleFieldChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}

	render() {
		return (
			<div>
				<h1>AddNoteContainer</h1>
				<form onSubmit={this.handleSubmit}>
					<input 
						type="text" 
						placeholder="Title" 
						name="title" 
						value={this.state.title}
						onChange={this.handleFieldChange} />
					<input 
						type="text" 
						placeholder="Body" 
						name="body" 
						value={this.state.body}
						onChange={this.handleFieldChange} />
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}