import React, { Component } from 'react';

export default class SignupForm extends Component {

	constructor(props) {
		super(props);

		this.state = {
			username: '',
			email: '',
			password: '',
			passwordConfirmation: '',
		}
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}

	onSubmit(e) {
		e.preventDefault();
		console.log(this.state);
	}

  render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
            <h1>Create an Account</h1>

            <label>Username</label>
            <input
            	onChange={this.onChange.bind(this)}
            	type="text"
            	name="username"/>

          	<label>Email</label>
            <input
            	onChange={this.onChange.bind(this)}
            	type="email"
            	name="email"/>  	

            <label>Password</label>
            <input
            	onChange={this.onChange.bind(this)}
            	type="password"
            	name="password"/>  		

            <label>Verify Password</label>
            <input
            	onChange={this.onChange.bind(this)}
            	type="password"
            	name="passwordConfirmation"/>

            <button> Sign up! </button>
            </form>
        );
    }
}