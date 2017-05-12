import React from "react";
import store from "../store.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { connect } from 'react-redux';
import utils from '../utils.js';
import tweetView from '../components/tweet_view.js';
import loginView from '../components/login_view.js';
import User from '../models/user_model.js';
import Post from '../models/post_model.js';
import Server from '../actions/server.js';
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
    const urls = {
          posts: 'https://api.backendless.com/A3E8487F-3843-57B1-FFD9-292137BD0E00/0DB613BB-B529-891F-FF9F-0DF48E631900/data/posts',
          users: 'https://api.backendless.com/A3E8487F-3843-57B1-FFD9-292137BD0E00/0DB613BB-B529-891F-FF9F-0DF48E631900/data/Users',
          register: 'https://api.backendless.com/A3E8487F-3843-57B1-FFD9-292137BD0E00/0DB613BB-B529-891F-FF9F-0DF48E631900/data/register'
        };


    var newState = utils.newState(currentState);

    if (currentState === undefined) {
        return initialState;
        }

    switch (action.type) {
        case 'SIGNUP':
            let retrievedUserToken;

            $.ajax({
                type: 'POST',
                url: urls.register,
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

                return newState;



            case "LOAD_POSTS_SIGNING_IN":

                return utils.copyState(currentState, {
                session: {
                    user: action.user,
                    userToken: action.userToken
                    },

                });
                $.ajax({
                    url: urls.posts,
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

                    return newState;


            case "LOAD_POSTS":
                $.ajax({
                    url: urls.posts,
                    method: "GET",
                    headers: {
                        "user-token": currentState.session.userToken
                        }
                        }).then( (postsData, status, xhr) => {
                            let postObjects = postsData.data.map( (post) => {
                                console.log(post);
                                return new Post({
                                    authorId:           post.authorId,
                                    authorUserName:     post.authorUserName,
                                    authorDisplayName:  post.authorDisplayName,
                                    authorAvatar:       post.authorAvatar,
                                    body:               post.body
                                });
                            });
                            console.log('>> put into Post objects: ', postObjects);
                            store.dispatch({
                                type: "VIEW_POSTS",
                                posts: postObjects
                            });
                        });

                        return newState();

            case 'VIEW_POSTS':
                this.props.history.push("/showing_tweets");
                return newState = {
                        posts: action.posts
                        };

            case 'NEW_POST':
                console.log('!! POSTING !!', action.postInfo);
                $.ajax({
                    url: urls.posts,
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
                    }).then( () => {
                        store.dispatch({
                            type: "LOAD_POSTS"
                        });
                    });

                    return newState;

            default:
                console.debug(`Unhandled Action: ${action.type}!`);
                return currentState;
                }
    return currentState;
};
