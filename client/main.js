import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {UP_Collection_Access} from './../imports/api/user_posts.js';
import App from './../imports/ui/App.js';


Meteor.startup(() =>  {

  Tracker.autorun(() => {
    let allPostsInDB = UP_Collection_Access.find({},
                                                  {sort: {likes: -1, dislikes: 0}}).fetch();
        let title = 'FakeBook';

    ReactDOM.render(<App
        passedPropTitle={title}
        passedPropUser={''}
        passedPropAllPosts={allPostsInDB}
        passedFooter={'\u00A9 FakeBook 2020'}
      />, document.getElementById('content'));

  });

});
