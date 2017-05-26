import React from "react";
import headerView from "./header_view.js";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";
import container from "../containers/all.js";
import loginUser from "../actions/login_user.js";

class loginView extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        let login = this.refs.email.value;
        let password = this.refs.password.value;
        this.props.dispatch(loginUser(login, password));
        this.props.history.push("/showing_posts");
    }

    // Create html
    render() {
        return (
            <section className="login">
                <h1>Tweeter</h1>
                <h2>sign in</h2>

                <div>
                    <form id="login-form" onSubmit={this.handleClick}>
                        <input
                            className="input-email"
                            type="text"
                            ref="email"
                            placeholder="user@example.com"
                        />
                        <input
                            className="input-password"
                            type="password"
                            ref="password"
                            placeholder="password"
                        />
                        <button className="btn btn-signin">sign in</button>
                    </form>
                </div>
            </section>
        );

        // //Add event listeners
        // $postForm.find('.btn-signin').on('click', (e) => {
        //     e.preventDefault();
        //     store.dispatch({
        //         type: 'SIGNIN',
        //         login : $postForm.find('.input-email').val(),
        //         password : $postForm.find('.input-password').val()
        //     });
        // });
        //
        // // return html of view
    }
}
export default connect(state => state)(loginView);
