import React, { Component } from 'react';
import history from '../history';

class Breadcrumbs extends Component {
    render() {
        return (
            <ol className="breadcrumbs">
                <li>
                    <a href="/careers">Careers</a>
                </li>
                {history && history.location.pathname !== '/' ? <li>
                    <span>
                        {history.location.pathname.slice(1)}
                    </span>
                </li> : null}
            </ol>
        )
    }
}

export default Breadcrumbs;