import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class ErrorPage extends Component {
    render() {
        return (
            <div>
            <p>Error</p>
            <Link to={{ pathname: '/' }} className="navlink">Back to home</Link>
            </div>

        )
    }
}

export default ErrorPage