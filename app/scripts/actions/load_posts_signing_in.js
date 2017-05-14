export default function loadPostsSignUp () {
  //All async action creators should return a function that takes 'dispatch' as its argument
  return function (dispatch) {

    //Before ajax call dispatch any needed actions
        dispatch(getAllPosts());
        //dispatch( { type: "VIEW_POSTS" });

        $.ajax({
            url: 'https://api.backendless.com/v1/data/posts',
            method: "GET",
            headers: {
                "user-token": newState.session.userToken,
                "application-id": "4233632D-E5E1-BA90-FF1D-8AACAAF84F00",
                "secret-key": "A0800D52-26C1-7B70-FF38-D7FAD7A39E00"
                }
                }).then( (postsData, status, xhr) => {
                    console.log('>> returned post data: ', postsData);
                    let postObjects = postsData.data.map( (post) => {
                        console.log(post);
                        return new Post({
                            postId:             post.objectId,
                            authorId:           post.authorId,
                            authorUserName:     post.authorUserName,
                            authorDisplayName:  post.authorDisplayName,
                            authorAvatar:       post.authorAvatar,
                            body:               post.body,
                            timePosted:         post.created
                        });
                    });
                    console.log('>> put into Post objects: ', postObjects);
                    dispatch({
                        type: "VIEW_POSTS",
                        posts: postObjects
                    });
                });

        return newState({
            session: {
                user: action.user,
                userToken: action.userToken
                }
         });
     }
 }
