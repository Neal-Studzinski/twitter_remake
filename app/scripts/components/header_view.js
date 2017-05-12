import React from "react";
import { connect } from "react-redux";
import store from "../store.js";


class headerView extends React.Component {
    constructor(props) {
        super(props);
    }



    //Create the HTML
    render() {
        return( <header className="app-header">
                    <h1 className="app-logo">Tweeter</h1>
                        <div className="user">

                        </div>
                    <nav className="main-nav"></nav>
                </header>)
    };

  //Assign any event listeners
  //<span class="display-name">${state.session.user.displayName}</span>
      //<div class="nav-avatar"><img src="${state.session.user.avatar}" /></div>

  // return html of view
}
export default connect(state => state)(headerView);
