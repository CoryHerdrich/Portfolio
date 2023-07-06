import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavigationComponent = props => {
    const dynamicLink = (route,linkText) => {
        return (
            <div className="nav-link-wrapper">
                <NavLink exact to={route} activeClassName="nav-link-active">
                    {linkText}
                </NavLink>
            </div>
        );
    };


const handleSignOut = () => {
    axios
        .delete("https://api.devcamp.space/logout", {withCredentials: true})
        .then(response => {
            if (response.status === 200) {
                props.history.push("/");
                props.handleSuccessfulLogout();
            }
            return response.data;
        })
        .catch(error => {
            console.log("Error Signing Out", error);
        });
};



        return (
            <div className="nav-wrapper">
                <div className="left-side">
                    <div className="nav-link-wrapper">
                        <NavLink exact to="/" activeClassName="nav-link-active">
                            Homepage
                        </NavLink>
                    </div>

                    <div className="nav-link-wrapper">
                        <NavLink exact to="/about-me" activeClassName="nav-link-active">
                            About Me
                        </NavLink>
                    </div>

                    <div className="nav-link-wrapper">
                        <NavLink exact to="/contact" activeClassName="nav-link-active">
                            Contact
                        </NavLink>
                    </div>

                    <div className="nav-link-wrapper">
                        <NavLink exact to="/blog" activeClassName="nav-link-active">
                            MyBlog
                        </NavLink>
                    </div>

                    {props.loggedInStatus === "LOGGED_IN" ? (
                        dynamicLink("/portfolio-manager", "Portfolio Manager") 
                    ) : null}

                        {false ? <button>Add Blog</button> : null}
                </div>

                <div className="right-side">
                    CoryHerdrich

                    {props.loggedInStatus === "LOGGED_IN" ? (
                        <a onClick={handleSignOut}>
                            <FontAwesomeIcon icon="thumbs-down" rotation={270} />
                        </a>
                    ) : null}
                </div>
            </div>
        )
    }

    export default withRouter(NavigationComponent);