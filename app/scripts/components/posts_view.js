import React from "react";
import headerView from "./header_view.js";
import postView from "./post_view.js";
import { connect } from "react-redux";
import store from "../store.js";

class postsView extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        console.log(this.props.posts);
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
                <div className="posts-wrapper"><h3>All Posts</h3></div>
                //{this.props.posts.map(post => <p>{post.body}</p>)}
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
