import React from 'react';
import {Meteor} from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import PropTypes from 'prop-types';


export default class LoginForm extends React.Component{
    handleSubmit = (event) => {
        event.preventDefault();
        Meteor.loginWithPassword(this.email.value, this.password.value);
        location.reload();
    }
    
    render(){
        return (
            <div>
                <form className='forms' onSubmit={this.handleSubmit}>
                <label>Log in: </label>
                <input type='email' ref={(email) => this.email = email} placeholder='email' size='5'/>
                <input type='password' ref={(password) => this.password = password} placeholder='password' size='5'/>
                <input type='submit' value='Log in'/>
                </form>
            </div>
        );
    }    
};