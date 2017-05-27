import React from "react";
import headerView from "./header_view.js";
import postView from "./post_view.js";
import { connect } from "react-redux";
import store from "../store.js";
import getAllPosts from "../actions/view_posts.js";
import newPost from "../actions/new_post.js";

class postsView extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handlePosts = this.handlePosts.bind(this);
    }

    handlePosts() {
        {
            this.props.posts.map(post => {
                return (
                    <section>
                        <div className="posts-wrapper">
                            <h3>All Posts</h3>
                        </div>
                        <div className="post-wrapper">
                            <p>{post.authorDisplayName}</p>
                            <p>{post.body}</p>
                        </div>
                    </section>
                );
            });
        }
    }

    render() {
        return (
            <section className="page-wrapper chat-view view-content">
                <form className="form-new-post">
                    <input
                        className="input-new-post"
                        type="text"
                        ref="newPost"
                        placeholder="new post…"
                    />
                    <button
                        className="btn btn-new-post"
                        type="submit"
                        onClick={this.handleClick}
                        ref="new-post-button"
                    >
                        +
                    </button>
                </form>

            </section>
        );
    }

    handleClick(e) {
        e.preventDefault();
        let newPostBody = this.refs.newPost.value;
        if (newPostBody !== "" && newPostBody !== undefined) {
            let newPostInfo = {
                body: newPostBody
            };
            this.props.dispatch(newPost(newPostInfo));
            this.props.dispatch({
                type: "NEW_POST",
                postInfo: newPostInfo
            });
        } else {
            console.log("new post field empty");
        }
    }
}
export default connect(state => state)(postsView);
