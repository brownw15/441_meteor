import React from 'react';
import {Meteor} from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import PropTypes from 'prop-types';


export default class RegisterForm extends React.Component{
    handleSubmit = (event) => {
        event.preventDefault();
        Accounts.createUser({
            email: this.email.value,
            password: this.password.value
        })
    }
    
    render(){
        return (
            <div>
                <form className='forms' onSubmit={this.handleSubmit}>
                <label>Register Here:  </label>
                <input type='email' ref={(email) => this.email = email} placeholder='email' size='5'/>
                <input type='password' ref={(password) => this.password = password} placeholder='password' size='5'/>
                <input type='submit' value='Sign up'/>
                </form>
            </div>
        );
    }    
};