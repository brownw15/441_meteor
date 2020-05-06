import React from 'react';
import {UP_Collection_Access} from './../api/user_posts.js';
import PropTypes from 'prop-types';
import SvgUserBox from './icons/js/UserBox';
import SvgDown from './icons/js/Down';
import SvgUp from './icons/js/Up';
import SvgTrash from './icons/js/Trash';
import SvgLogo from './icons/js/Logo';

//import {randomColor} from './icons/randomColor';


export default class RenderPost extends React.Component{
  
  randomColor = () => {
    var color = Math.floor(Math.random() * 16777216).toString(16);
    return '#000000'.slice(0, -color.length) + color;
  }

  render(){
    return (
      <>
        <div key={this.props.post_prop_obj._id} className='single-block-item-style'>{}
          <div className='post'>
            <div>
              <SvgUserBox width={40} height={40} fill={this.randomColor()}/>
               {/*<h3 className='post__stats'>{this.props.post_prop_obj.owner}</h3>*/}
              <h3 className='post__topic'>{this.props.post_prop_obj.topic}</h3>
              <p className='post__stats'> {this.props.post_prop_obj.likes} like this post</p>
              <p className='post__stats'> {this.props.post_prop_obj.dislikes} dislike this post</p> {''}
            </div>
            <div className='post__actions'>
              <button className='button button--round' onClick={() => {
                UP_Collection_Access.update({_id: this.props.post_prop_obj._id},
                  {$inc: {likes: 1}})}}><SvgUp/></button>

              <button className='button button--round' onClick={() => {
                UP_Collection_Access.update({_id: this.props.post_prop_obj._id},
                  {$inc: {dislikes: 1}})}}><SvgDown/></button>

              <button className='button button--round' onClick={() => {
                UP_Collection_Access.emove({_id: this.props.post_prop_obj._id})
              }}><SvgTrash/></button>
            </div>
              
          </div>
        </div>
      </>
    );
  }
};
RenderPost.propTypes = {
  post_prop_obj: PropTypes.object.isRequired,
};
