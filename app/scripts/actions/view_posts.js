export default function getAllPosts () {
  //All async action creators should return a function that takes 'dispatch' as its argument
  return function (dispatch) {
    //Before ajax call dispatch any needed actions
    dispatch( { type: "STARTING_GETTING_ALL_POSTS" });

    $.getJSON('https://api.backendless.com/A3E8487F-3843-57B1-FFD9-292137BD0E00/0DB613BB-B529-891F-FF9F-0DF48E631900/data/posts')
        .then((data) => {
        store.dispatch(actions.postsView(data));
        dispatch( { type: "ENDING_GETTING_ALL_POSTS" });
        });
    }


}
