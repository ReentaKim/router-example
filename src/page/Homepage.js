import React from 'react';
import {Link} from "react-router-dom";

const Homepage = () => {
    return (
        <div>
            <h1>Homepage</h1>
            <Link to={'/about'}>GO TO ABOUT</Link>
        </div>
    );
};

export default Homepage;