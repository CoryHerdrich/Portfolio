import React from "react";
import { Link } from "react-router-dom";
import sorry from "../../../static/assets/images/auth/sorry.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function() {
    return (
        <div className="oops">
            <h1>I'm Sorry, this page doesn't exist.</h1>
            <div className="sad">
                <img src={sorry} alt="sorry" width="40%" align-content="center" />
            </div>
            <div className="tear">
                <FontAwesomeIcon className="water" icon="droplet" bounce />
                     NO MORE TEARS! 
                <FontAwesomeIcon className="water" icon="droplet" bounce />
            </div>
            <div className="down">
                <FontAwesomeIcon className="arrow" icon="fa-solid fa-arrow-trend-down" />
                Let's go downstairs and ask for directions in the Lobby
                <FontAwesomeIcon className="arrow" icon="fa-solid fa-arrow-trend-down" flip="horizontal" />
            </div>
            <div className="steps">
                <Link to="/"><FontAwesomeIcon icon="stairs" beat fade /></Link>
            </div>
        </div>
    );
}


