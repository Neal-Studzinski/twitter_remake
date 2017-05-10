import React from 'react';
import { createStore } from 'redux';

export default function reducer(currentState, action) {

    if (currentState === undefined) {
        return initialState;
        }

        switch (action.type) {

            case "START":
                return currentState;

            case 'SIGNIN':
                var newState = {
                view: signingInView
                };

                let retrievedUserToken;

            $.ajax({
                type: 'POST',
                url: urls.users,
                dataType: 'JSON',
                headers: {
                    "application-id": applicationId,
                    "secret-key": secretKey,
                    "Content-Type": "application/json",
                    "application-type": "REST"
                    },
                    data: JSON.stringify({
                        login: action.login,
                        password: action.password
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

                        return Object.assign({}, currentState, newState);


            case "LOAD_POSTS_SIGNING_IN":
                var newState = {
                    session: {
                        user: action.user,
                        userToken: action.userToken
                        },
                    view: loadingPostsView
                    };

                $.ajax({
                    url: urls.posts,
                    method: "GET",
                    headers: {
                        "application-id": applicationId,
                        "secret-key": secretKey,
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

                    return Object.assign({}, currentState, newState);

            case "LOAD_POSTS":
                var newState = {
                    view: loadingPostsView
                    };
                $.ajax({
                    url: urls.posts,
                    method: "GET",
                    headers: {
                        "application-id": applicationId,
                        "secret-key": secretKey,
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

                    return Object.assign({}, currentState, newState);

            case 'VIEW_POSTS':
                var newState = {
                    view: postsView,
                    posts: action.posts
                    };

                    return Object.assign({}, currentState, newState);

            case 'NEW_POST':
                console.log('!! POSTING !!', action.postInfo);
                $.ajax({
                    url: urls.posts,
                    type: 'POST',
                    dataType: 'JSON',
                    headers: {
                        "application-id": applicationId,
                        "secret-key": secretKey,
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

                    return currentState;

            default:
                console.debug(`Unhandled Action: ${action.type}!`);
                return currentState;
                }
    return currentState;
};
