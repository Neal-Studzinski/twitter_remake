import getAllPosts from "../actions/view_posts.js";
import Post from "../models/post_model.js";

export default function loadPosts() {
    //All async action creators should return a function that takes 'dispatch' as its argument
    return function(dispatch) {
        //Before ajax call dispatch any needed actions
        dispatch({ type: "STARTING_LOAD_POST" });
        let retrievedUserToken;
        $.ajax({
            url: "https://api.backendless.com/v1/data/posts",
            method: "GET",
            headers: {
                //"user-token": userToken,
                "application-id": "4233632D-E5E1-BA90-FF1D-8AACAAF84F00",
                "secret-key": "A0800D52-26C1-7B70-FF38-D7FAD7A39E00"
                //"Content-Type":
            }
        }).then((postsData, status, xhr) => {
            let postObjects = postsData.data.map(post => {
                console.log(post);
                return new Post({
                    authorId: post.authorId,
                    authorUserName: post.authorUserName,
                    authorDisplayName: post.authorDisplayName,
                    authorAvatar: post.authorAvatar,
                    body: post.body
                });
            });
            console.log(">> put into Post objects: ", postObjects);
            //dispatch(getAllPosts());
            //this.props.history.push("/showing_posts");
            dispatch({
                type: "LOAD_POSTS_INTO_STATE",
                posts: postObjects
            });
            //dispatch(getAllPosts());
        });
    };
    return currentState;
}
