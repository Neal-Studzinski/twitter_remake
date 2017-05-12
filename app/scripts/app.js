import store from "./store.js";
import React from "react";
import loginView from './components/login_view.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { connect } from 'react-redux';
import AppRoot from "./components/app_root.js";
import reducer from './reducers/app_reducer.js';
import LoggingInView from './components/logging_in_view.js';
import signUpView from './components/signUp_view.js';
import postsView from './components/tweets_view.js';
import tweetView from './components/tweet_view.js';
import headerView from './components/header_view.js';

export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={signUpView} />
          <Route exact path="/header" component={headerView} />
          <Route exact path="/login" component={loginView} />
          <Route exact path="/signing_in" component={LoggingInView} />
          <Route exact path="/showing_tweets" component={postsView} />
          <Route exact path="/showing_tweet" component={tweetView} />
        </div>
      </Router>
    </Provider>,
    document.getElementById("app")
  );
}

//store.dispatch({ type: "SIGNIN" });
