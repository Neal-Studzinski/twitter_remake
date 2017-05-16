import User from "../models/user_model.js";
import loadPostsSignUp from "../actions/load_posts_signing_in.js";
export default function loginUser(login, password) {
    return dispatch => {
        let retrievedUserToken;
        dispatch({ type: "STARTING_LOGIN", login: login, password: password });
        //dispatch(loadTodos());

        $.ajax({
            type: "POST",
            url: "https://api.backendless.com/v1/users/login",
            dataType: "JSON",
            headers: {
                "Content-Type": "application/json",
                "application-type": "REST",
                "application-id": "4233632D-E5E1-BA90-FF1D-8AACAAF84F00",
                "secret-key": "A0800D52-26C1-7B70-FF38-D7FAD7A39E00"
            },
            data: JSON.stringify({
                login: login,
                password: password
            })
        }).then((data, status, xhr) => {
            retrievedUserToken = data["user-token"];
            dispatch(loadPostsSignUp());
            dispatch({
                type: "STARTING_LOAD_POSTS_SIGNING_IN",
                userToken: data["user-token"],
                user: new User({
                    id: data.objectId,
                    username: data.username,
                    displayName: data.displayName,
                    bio: data.bio
                })
            });
        });
        //return retrievedUserToken;
    };
}
