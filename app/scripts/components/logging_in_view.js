import React from 'react';
import headerView from './header_view.js';
import { connect } from 'react-redux';
import { Route, Link, NavLink } from 'react-router-dom';
import loadPosts from '../actions/load_posts.js'

class logging_in_view extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount () {
        //this.props.history.push("/showing_posts");
         this.props.dispatch(loadPosts())
    }

    render() {
        return  (<section className="page-wrapper chat-view">
                    <div className="view-content">
                        <h2>signing in</h2>
                    </div>
                </section>)
    }

  // return html of view

}
export default connect(state => state)(logging_in_view)
