

export default function newPost () {
  //All async action creators should return a function that takes 'dispatch' as its argument
  return function (dispatch) {
      //Before ajax call dispatch any needed actions
    //   dispatch( { type: "STARTING_NEW_POST" });

      console.log('!! POSTING !!', action.postInfo);
      $.ajax({
          url: 'https://api.backendless.com/v1/data/posts',
          type: 'POST',
          dataType: 'JSON',
          headers: {
              "user-token": currentState.session.userToken,
              "Content-Type": "application/json",
              "application-type": "REST",
              "application-id": "4233632D-E5E1-BA90-FF1D-8AACAAF84F00",
              "secret-key": "A0800D52-26C1-7B70-FF38-D7FAD7A39E00"
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

    }).then( response => {
              dispatch({
                  type: "LOAD_POSTS",
                  data: response
              });
          });
      }
      return currentState;
  }
