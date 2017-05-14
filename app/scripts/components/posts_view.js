import React from 'react';
import headerView from './header_view.js';
import postView from './post_view.js';
import { connect } from 'react-redux';
import store from '../store.js';


class postsView extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }


    render() {
        return(<section className="page-wrapper chat-view view-content">
                    <form className="form-new-post">
                        <input className="input-new-post" type="text" ref="new-post" placeholder="new post…" />
                        <button className="btn btn-new-post" type="submit" onClick={this.handleClick} ref="new-post-button">+</button>
                    </form>
                    <div className="posts-wrapper"><h3>All Posts</h3></div>
                </section>
        )
    }
     getState() {
         posts.forEach( (post) => {
             (new postView(store, post));
             });
         }
    handleClick () {
        e.preventDefault();
        let newPostBody = this.refs.new-post.value;
        if(newPostBody !== '' && newPostBody !== undefined) {
          let newPostInfo = {
            authorId:           state.session.user.id,
            authorUserName:     state.session.user.userName,
            authorDisplayName:  state.session.user.displayName || '',
            authorAvatar:       state.session.user.avatar || '',
            body:               newPostBody
          };
        dispatch({
            type: 'NEW_POST',
            postInfo: newPostInfo
          });
        } else {
            console.log('new post field empty');
            }

    }


}
export default connect(state => state)(postsView);
