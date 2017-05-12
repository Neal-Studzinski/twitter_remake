import React from 'react';
import headerView from './header_view.js';
import { connect } from 'react-redux';
import { Route, Link, NavLink } from 'react-router-dom';


class logging_in_view extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return  (<section class="page-wrapper chat-view">
                    <div class="view-content">
                        <h2>signing in</h2>
                    </div>
                </section>)
    }

  // return html of view

}
export default connect(state => state)(logging_in_view)
