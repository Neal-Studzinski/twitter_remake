const APPLICATION_ID = "A3E8487F-3843-57B1-FFD9-292137BD0E00";
const SECRET_KEY = "0DB613BB-B529-891F-FF9F-0DF48E631900";
const URLS = {
    posts: 'https://api.backendless.com/v1/data/posts',
    users: 'https://api.backendless.com/v1/users/login'
}

export default function server() {

    login: (store) => {
        $.ajax({
            type: 'POST',
            url: URLS.users,
            dataType: 'JSON',
            headers: {
                "application-id": APPLICATION_ID,
                "secret-key" : SECRET_KEY,
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

    getAllTweets: function () {
        $.getJSON(url).then((data) => {
            store.dispatch(actions.tweetsLoaded(data));
        });
    },

    createNewTweet: function(tweet) {
        $.ajax({
            url: URLS.posts,
            type: "POST",
            dataType: "JSON",
            data: {
                name: tweet
            }
        }).then(() => {
            store.dispatch(actions, loadTweets())
        });

    },
    deleteTweet: function(tweet) {
        $.ajax({
            url: `${URLS.posts}/${tweet.id}`,
            type: 'DELETE',
        }).then(() => {
            store.dispatch(actions, loadTweets())
        });
    }

};
