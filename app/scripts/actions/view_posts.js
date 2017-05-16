export default function getAllPosts () {
  //All async action creators should return a function that takes 'dispatch' as its argument
  return(dispatch) => {
    //Before ajax call dispatch any needed actions
    dispatch( { type: "STARTING_GETTING_ALL_POSTS" });

     return $.getJSON('https://api.backendless.com/v1/data/posts').then((data) => {
         dispatch(action.postsView(data));
        // ,
        // headers: {
        //     "Content-Type": "application/json",
        //     "application-type": "REST",
        //     "application-id": "4233632D-E5E1-BA90-FF1D-8AACAAF84F00",
        //     "secret-key": "A0800D52-26C1-7B70-FF38-D7FAD7A39E00"
        // }).then((data) => {
        //     dispatch(actions.postsView(data));
        //     dispatch( { type: "ENDING_GETTING_ALL_POSTS" });
        // )}}
    });

    }
}
