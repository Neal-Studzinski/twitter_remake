import { connect } from 'react-redux';

export default function Server() {

    const urls = {
          posts: 'https://api.backendless.com/A3E8487F-3843-57B1-FFD9-292137BD0E00/0DB613BB-B529-891F-FF9F-0DF48E631900/data/posts',
          users: 'https://api.backendless.com/A3E8487F-3843-57B1-FFD9-292137BD0E00/0DB613BB-B529-891F-FF9F-0DF48E631900/data/Users',
          register: 'https://api.backendless.com/A3E8487F-3843-57B1-FFD9-292137BD0E00/0DB613BB-B529-891F-FF9F-0DF48E631900/data/register'

        };


    login: (store) => {
        $.ajax({
            type: 'POST',
            url: urls.users,
            dataType: 'JSON',
            headers: {
                //"application-id": APPLICATION_ID,
                //"secret-key" : SECRET_KEY,
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
    },

    function getAllTweets() {
        $.getJSON(url).then((data) => {
            store.dispatch(actions.tweetsLoaded(data));
        });
    },

    function createNewTweet(tweet) {
        $.ajax({
            url: urls.posts,
            type: "POST",
            dataType: "JSON",
            data: {
                name: tweet
            }
        }).then(() => {
            store.dispatch(actions, loadTweets())
        });

    },
    function deleteTweet(tweet) {
        $.ajax({
            url: `${urls.posts}/${tweet.id}`,
            type: 'DELETE',
        }).then(() => {
            store.dispatch(actions, loadTweets())
        });
    }

};
