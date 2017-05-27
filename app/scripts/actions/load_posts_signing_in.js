import getAllPosts from "../actions/view_posts.js";
import Post from "../models/post_model.js";
import signUp from "../actions/sign_up.js";
import loadPosts from "../actions/load_posts.js";
export default function loadPostsSignUp() {
    //All async action creators should return a function that takes 'dispatch' as its argument
    return function(dispatch) {
        let userToken;
        //Before ajax call dispatch any needed actions
        //dispatch(getAllPosts());

        $.ajax({
            url: "https://api.backendless.com/v1/data/posts",
            method: "GET",

            //dataType: 'json',
            headers: {
                "application-type": "REST",
                //"user-token": userToken,
                "application-id": "4233632D-E5E1-BA90-FF1D-8AACAAF84F00",
                "secret-key": "A0800D52-26C1-7B70-FF38-D7FAD7A39E00"
            }
        }).then((postsData, status, xhr) => {
            //console.log(">> returned post data: ", postsData);
            let postObjects = postsData.data.map(post => {
                return new Post({
                    postId: post.objectId,
                    authorId: post.authorId,
                    authorUserName: post.authorUserName,
                    authorDisplayName: post.authorDisplayName,
                    authorAvatar: post.authorAvatar,
                    body: post.body,
                    timePosted: post.created
                });
            });
            //console.log(">> put into Post objects: ", postObjects);
            //dispatch(loadPosts(postObjects));
            dispatch({ type: "RETURN_POST_DATA", posts: postObjects });

            // dispatch({
            //     type: "VIEW_POSTS",
            //     posts: postObjects
        });
    };

    // return newState({
    //     session: {
    //         user: action.user,
    //         userToken: action.userToken
    //         }
    //});
}
