export default function loadPostsSignUp () {
  //All async action creators should return a function that takes 'dispatch' as its argument
  return function (dispatch) {

    //Before ajax call dispatch any needed actions
        dispatch( { type: "STARTING_LOAD_POSTS_SIGNING_IN" });
                }
        $.ajax({
            url: 'https://api.backendless.com/A3E8487F-3843-57B1-FFD9-292137BD0E00/0DB613BB-B529-891F-FF9F-0DF48E631900/data/posts',
            method: "GET",
            headers: {
                "user-token": newState.session.userToken
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
                    store.dispatch({
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
