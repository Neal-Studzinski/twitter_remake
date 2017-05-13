export default function getAllPosts () {
  //All async action creators should return a function that takes 'dispatch' as its argument
  return function (dispatch) {
    //Before ajax call dispatch any needed actions
    dispatch( { type: "STARTING_GETTING_ALL_POSTS" });

    $.getJSON('https://api.backendless.com/v1/data/posts')
        .then((data) => {
        dispatch(actions.postsView(data));
        dispatch( { type: "ENDING_GETTING_ALL_POSTS" });
        });
    }


}
