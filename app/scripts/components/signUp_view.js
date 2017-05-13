import React from 'react';
import headerView from './header_view.js';
import { connect } from 'react-redux';
import { Route, Link, NavLink } from 'react-router-dom';
import container from '../containers/all.js';
import loginUser from '../actions/login_user.js'

class signUpView extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (e) {
        e.preventDefault();
        let email = this.refs.email.value;
        let password = this.refs.password.value;
        let displayName = this.refs.displayName.value;
        this.props.dispatch(loginUser(email,password,displayName));
        this.props.history.push("/signing_in");

    }


    // Create html
    render() {
        return(<section className="signUp">
                    <h1>Tweeter</h1>
                    <h2>Sign Up for an Account</h2>

                    <div>
                        <form id="login-form" onSubmit={this.handleClick}>
                            <input className="input-email" type="text" ref="email" placeholder="email…" /><br />
                            <input className="input-password" type="password" ref="password" placeholder="password…" /><br />
                            <input className="input-displayName" type="text" ref="displayName" placeholder="displayName..."/><br />
                            <button className="btn btn-signin" >Sign Up</button>
                        </form>
                    </div>
                </section>)


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
export default connect(state => state)(signUpView)
