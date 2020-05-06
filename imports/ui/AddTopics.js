import React from 'react';
import {UP_Collection_Access} from './../api/user_posts.js';


export default class AddTopics extends React.Component{

  

  getUserEmail(){
    var currentUserId = Meteor.userId();

    let useremail = Meteor.users.findOne({_id:currentUserId});
    var Email = useremail.emails[0].address;
    Email.toString();
    //console.log(useremail); Print out the user ID
    //console.log(Email); Print out the should be string value of the users email based on the id
    return Email;
  }

  processFormData(event){
    event.preventDefault()
    let newTopic = event.target.formInputNameAttribute.value;
    if(Meteor.userId()!= null){
      console.log('logged in');
    }

    if (newTopic){
      event.target.formInputNameAttribute.value = ''; 
      UP_Collection_Access.insert({
        owner: this.getUseemail(),
        topic: newTopic,
        likes: 0,
        dislikes: 0
      });

    };
  }

  render(){
    return (
      <div className='single-block-item-style'>
        <form className='form' onSubmit={this.processFormData.bind(this)}>
          <input className='form__input' type='text' name='formInputNameAttribute' placeholder='Topic Name'/>
          <button className='button'>Add Topic</button>
        </form>
      </div>
    );
  }
};
