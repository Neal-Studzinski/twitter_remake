export default function newPost () {
  //All async action creators should return a function that takes 'dispatch' as its argument
  return function (dispatch) {
      //Before ajax call dispatch any needed actions
      dispatch( { type: "STARTING_NEW_POST" });

      console.log('!! POSTING !!', action.postInfo);
      $.ajax({
          url: 'https://api.backendless.com/A3E8487F-3843-57B1-FFD9-292137BD0E00/0DB613BB-B529-891F-FF9F-0DF48E631900/data/posts',
          type: 'POST',
          dataType: 'JSON',
          headers: {
              "user-token": currentState.session.userToken,
              "Content-Type": "application/json",
              "application-type": "REST"
          },
          data: JSON.stringify({
              authorId:           action.postInfo.authorId,
              authorUserName:     action.postInfo.authorUserName,
              authorDisplayName:  action.postInfo.authorDisplayName,
              authorAvatar:       action.postInfo.authorAvatar,
              body:               action.postInfo.body
          })
        //   function createNewTweet(tweet) {
        //       $.ajax({
        //           url: urls.posts,
        //           type: "POST",
        //           dataType: "JSON",
        //           data: {
        //               name: tweet
        //           }
        //       }).then(() => {
        //           store.dispatch(actions, load_posts())
        //       });
          //
        //   },

          }).then( () => {
              store.dispatch({
                  type: "LOAD_POSTS"
              });
          });
      }
      return currentState;
  }
