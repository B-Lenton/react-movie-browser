import React from "react";
import { Link } from 'react-router-dom';

const NotFoundView = () => {
    return (
        <div className="container m-5">
            <div className="text-center py-5 border border-4 border-danger bg-warning">
                <h3>Whoops... you found the hidden page!</h3>
                <p className="lead">Sorry, the page you are looking for doesn't exist.</p>
                <h4>
                    <Link to="/">Movie Browser Homepage</Link>
                </h4>
            </div>
        </div>
    )
}

export default NotFoundView;