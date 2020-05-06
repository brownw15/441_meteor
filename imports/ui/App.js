import React from 'react';
import PropTypes from 'prop-types';
import Masthead from './Masthead.js';
import AddTopics from './AddTopics.js';
import TopicList from './TopicList.js';
import Footer from './Footer.js';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Masthead
          title={this.props.passedPropTitle}
          user={this.props.passedUser}/>
        <div className='wrapper'>
          <AddTopics />
          <TopicList passed_posts={this.props.passedPropAllPosts}/>
        </div>
        <Footer footerText={this.props.passedFooter} />
      </>
    )
  }

};

App.propTypes = {
  passedPropTitle: PropTypes.string.isRequired,
  passedPropAllPosts: PropTypes.array.isRequired
};
