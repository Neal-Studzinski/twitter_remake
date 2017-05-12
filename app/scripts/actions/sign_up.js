export default function signUp () {
  //All async action creators should return a function that takes 'dispatch' as its argument
  return function (dispatch) {
       let retrievedUserToken;
       //Before ajax call dispatch any needed actions
       dispatch( { type: "STARTING_SIGNUP" });

       $.ajax({
           type: 'POST',
           url: 'https://api.backendless.com/A3E8487F-3843-57B1-FFD9-292137BD0E00/0DB613BB-B529-891F-FF9F-0DF48E631900/data/register',
           dataType: 'JSON',
           headers: {
               "Content-Type": "application/json",
               "application-type": "REST"
                },
                data: JSON.stringify({
                    email: action.login,
                    password: action.password,
                    displayName: action.displayName
                })
                }).then( (data, status, xhr) => {
                    retrievedUserToken = data['user-token'];
                    store.dispatch({
                        type: "LOAD_POSTS_SIGNING_IN",
                        user: new User({
                            id : data.objectId,
                            userName : data.userName,
                            displayName : data.displayName,
                            bio : data.bio ||'',
                            avatar : data.avatar
                        }),
                        userToken: data['user-token']
                        });
                    });

        return currentState;

      //dispatch( { type: "ENDING_EXAMPLE_ASYNC" });
    })
  }
