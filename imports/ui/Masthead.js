import React from 'react';
import {Meteor} from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import PropTypes from 'prop-types';
import LoginForm from './Login.js';
import RegisterForm from './Register.js';
import getUserE mail from './AddTopics';


export default class Masthead extends React.Component{
  
  constructor () {
    super()
    this.state = {
      shown: true
    }
  }

  getMeteorData(){
    var authRes = false;

    if(Meteor.userId == null){
      return authRes;
    }
    else{
      authRes = true;
      //console.log(Meteor.userId()); console log id to confirm one was retreived
      return authRes;
    }
  }

  logout(e) {
    Meteor.logout();
    Meteor._localStorage.removeItem('Meteor.userId');
    this.setUserId(null);
  }

  renderUser(){
    if(this.getMeteorData()==true){
      return(
        <div>
          <div className='title-bar'> 
            <p> Welcome Back! {this.props.user} </p>
          </div> 
          <div className='title-bar__logout'>
            <a href='#' onClick={Meteor.logout()}>Logout</a>
          </div>
        </div>
      )
    } else {
      return (
        <div className='title-bar'>
          {this.state.shown ? <RegisterForm/> : <LoginForm/>}
				<button onClick={() => this.setState({ shown: !this.state.shown })}>Sign-Up | Login</button>
        </div>
      ) 
    }
  }

  render(){
    return (
      <div className='wrapper'>
        <div className='title-bar'>
          <h1>{this.props.title}</h1>
          {this.renderUser()}     
        </div>
      </div>
    );
  }
};

Masthead.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.string,
};
