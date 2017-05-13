export default function deletePost (post) {
  //All async action creators should return a function that takes 'dispatch' as its argument
  return function (dispatch) {
      //Before ajax call dispatch any needed actions
      dispatch( { type: "STARTING_DELETE_POST" });
      //Do the ajax call
      $.ajax({
            url: `${'https://api.backendless.com/v1/data/posts'}/${post.id}`,
            type: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "application-type": "REST",
                "application-id": "4233632D-E5E1-BA90-FF1D-8AACAAF84F00",
                "secret-key": "A0800D52-26C1-7B70-FF38-D7FAD7A39E00"
                 },
            }).then(() => {
                store.dispatch(actions, load_posts())
                dispatch( { type: "ENDING_DELETE_POST" });
                });
            }
      //After the ajax call dispatch any needed actions

    }
