import React from "react";
import store from "../store.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { connect } from 'react-redux';
import utils from '../utils.js';
import postView from '../components/post_view.js';
import loginView from '../components/login_view.js';
import User from '../models/user_model.js';
import Post from '../models/post_model.js';
import loadingPostsView from '../components/logging_in_view';

const initialState = {
    session: {
        user: {},
        userToken: ''
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

        case 'SIGNUP':

        case "LOAD_POSTS_SIGNING_IN":

        case "LOAD_POSTS":

        case 'VIEW_POSTS':
            this.props.history.push("/showing_tweets");
            return newState({
                    posts: action.posts
                });

        case 'NEW_POST':


        default:
            console.debug(`Unhandled Action: ${action.type}!`);
            return currentState;
            }
return currentState;
};


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
