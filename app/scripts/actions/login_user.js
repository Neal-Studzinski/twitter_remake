
export default function loginUser (user,password) {
  return (dispatch) => {
    dispatch({ type: "SIGNIN", login: user, password: password });
    //dispatch(loadTodos());
  }
}
