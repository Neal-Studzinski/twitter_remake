
export default function loginUser (user,password) {
    return (dispatch) => {
        dispatch({ type: "STARTING_LOGIN", login: user, password: password });
        //dispatch(loadTodos());
        }

        login: (store) => {
            $.ajax({
                type: 'POST',
                url: 'https://api.backendless.com/A3E8487F-3843-57B1-FFD9-292137BD0E00/0DB613BB-B529-891F-FF9F-0DF48E631900/data/Users',
                dataType: 'JSON',
                headers: {
                    "ContentType" : "application/json",
                    "application-type" : "REST"
                    },
                data: JSON.stringify({
                    login: action.login,
                    password: action.password
                })
                }).then( (data,status,xhr) => {
                    receivedUserToken = data['user-token'];
                    store.dispatch({
                        type: "LOAD_TWEETS",
                        user: new User({
                            id: data.objectId,
                            username: data.username,
                            displayName: data.displayName,
                            bio: data.bio
                        }),
                    userToken: data['user-token']
                });
            });
        }
}
