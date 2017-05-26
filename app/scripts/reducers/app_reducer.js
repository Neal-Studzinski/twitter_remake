import React from "react";
import store from "../store.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import utils from "../utils.js";
import postView from "../components/post_view.js";
import loginView from "../components/login_view.js";
import User from "../models/user_model.js";
import Post from "../models/post_model.js";
import loadingPostsView from "../components/logging_in_view";
import signUp from "../actions/sign_up.js";
import signUpView from "../components/signUp_view.js";

const initialState = {
    session: {
        user: {},
        userToken: ""
    },
    posts: [],
    users: []
};

export default function reducer(currentState, action) {
    const newState = utils.newState(currentState);

    if (currentState === undefined) {
        return initialState;
    }

    switch (action.type) {
        case "STARTING_SIGNUP":
            return currentState;

        case "CREATE_USER":
            console.log("I added a user");
            console.log(action);
            return newState({
                session: {
                    user: action.user,
                    userToken: action.token
                }
            });
        // return newState = {
        //     email: action.email,
        //     password: action.password,
        //     displayName: action.displayName
        //    };


        case "LOGIN":

        case "STARTING_LOGIN":
            return currentState;

        case "STARTING_LOAD_POSTS_SIGNING_IN":
            return newState({
                posts: action.postsInfo || []
            });
        //return currentState;


        case "LOAD_POSTS_SIGNING_IN":
            return currentState;

        case "STARTING_LOAD_POST":
            return currentState;
        case "STARTING_GETTING_ALL_POSTS":
            return currentState;
        case "LOAD_POSTS":
            return currentState;
        case "ENDING_GETTING_ALL_POSTS":
            return currentState;

        case "LOAD_POSTS_INTO_STATE":
            return Object.assign({}, currentState, { posts: action.posts });

        case "VIEW_POSTS":
            //this.props.history.push("/showing_posts");
            window.location.hash = "#/showing_posts";
            // return Object.assign({}, currentState, { posts: action.posts });
            return currentState;

        case "STARTING_NEW_POST":

        case "NEW_POST":
            return newState({
                posts: action.postInfo
            });
        case "DELETE_POST":

        default:
            console.debug(`Unhandled Action: ${action.type}!`);
            return currentState;
    }
    return currentState;
}

// return Object.assign({}, currentState, {
//     session: {
//         user: action.user,
//         userToken: action.userToken
//     }
// })
//
// return utils.copyState(currentState, {
//     session: {
//         user: action.user,
//         userToken: action.userToken
//     }
// })
//
// return newState({
//     session: {
//         user: action.user,
//         userToken: action.userToken
//     }
// });
