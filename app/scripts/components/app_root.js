import React from "react";
import { connect } from "react-redux";
import { Route, Link, NavLink } from "react-router-dom";
import container from '../containers/all.js';

class AppRoot extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <main>
                <section />
            </main>
        );
    }
}

export default connect(container.allState)(AppRoot)
