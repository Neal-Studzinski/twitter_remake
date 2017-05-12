
export default function loginUser (user,password,displayName) {
  return (dispatch) => {
    dispatch({ type: "SIGNUP", login: user, password: password, displayName: displayName });
    //dispatch(loadTodos());
  }
}
