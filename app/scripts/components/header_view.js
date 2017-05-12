import React from "react";
import { connect } from "react-redux";


class headerView extends React.Component {
    constructor(props) {
        super(props);
    }



    //Create the HTML
    render() {
        return( <header class="app-header">
                    <h1 class="app-logo">Tweeter</h1>
                        <div class="user">
                            <span class="display-name">${state.session.user.displayName}</span>
                                <div class="nav-avatar"><img src="${state.session.user.avatar}" /></div>
                        </div>
                    <nav class="main-nav"></nav>
                </header>)
    };

  //Assign any event listeners


  // return html of view
}
export default connect(state => state)(headerView);
