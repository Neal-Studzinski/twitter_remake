export default function deletePost (post) {
  //All async action creators should return a function that takes 'dispatch' as its argument
  return function (dispatch) {
      //Before ajax call dispatch any needed actions
      dispatch( { type: "STARTING_DELETE_POST" });
      //Do the ajax call
      $.ajax({
            url: `${'https://api.backendless.com/A3E8487F-3843-57B1-FFD9-292137BD0E00/0DB613BB-B529-891F-FF9F-0DF48E631900/data/posts'}/${post.id}`,
            type: 'DELETE',
            }).then(() => {
                store.dispatch(actions, load_posts())
                dispatch( { type: "ENDING_DELETE_POST" });
                });
            }
      //After the ajax call dispatch any needed actions

    }
