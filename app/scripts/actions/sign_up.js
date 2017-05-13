export default function signUp () {
  //All async action creators should return a function that takes 'dispatch' as its argument
  return function (dispatch) {
       let retrievedUserToken;
       //Before ajax call dispatch any needed actions
       dispatch( { type: "STARTING_SIGNUP" });

       $.ajax({
           type: 'POST',
           url: 'https://api.backendless.com/v1/data/Users',
           dataType: 'JSON',
           headers: {
               "Content-Type": "application/json",
               "application-type": "REST",
               "application-id": "4233632D-E5E1-BA90-FF1D-8AACAAF84F00",
               "secret-key": "A0800D52-26C1-7B70-FF38-D7FAD7A39E00"
                },
                data: JSON.stringify({
                    email: action.email,
                    password: action.password,
                    displayName: action.displayName
                })
                }).then( (data, status, xhr) => {
                    retrievedUserToken = data['user-token'];
                    dispatch({
                        type: "CREATE_USER",
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
    }
  }
