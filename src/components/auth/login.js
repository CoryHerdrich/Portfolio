import React, { Component } from 'react';
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            errorText: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ""
        });        
    }

    handleSubmit(event) {
        axios.post("https://api.devcamp.space/sessions",
        {
            client: {
                email: this.state.email,
                password: this.state.password
            }
        },
        { withCredentials: true }
        )
        .then(response => {
            if (response.data.status === "created") {
                console.log("Willkommen Zuhause"); 
                this.props.handleSuccessfulAuth();
                
            } else {
                this.setState({
                    errorText: "FALSCHE E-MAIL ODER PASSWORT"    
                });
                this.props.handleUnSuccessfulAuth();
            }          
        })
        .catch(error => {
            this.setState({
                errorText: "ES IST EIN FEHLER AUFGETRETEN"
            })
            
        });

        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>DASHBOARD LOGIN</h1>
                <h2>{this.state.email}</h2>
                <div>{this.state.errorText}</div>

                <form onSubmit={this.handleSubmit} className="auth-form-wrapper">
                    <div className="form-group">
                        <FontAwesomeIcon icon="envelope-open" />
                        <input 
                            type="text" 
                            name="email"
                            placeholder="E-MAIL"
                            value={this.state.email}
                            onChange={this.handleChange}
                            />
                    </div>
                    
                    <div className="form-group">
                        <FontAwesomeIcon icon="unlock-keyhole" />
                        <input 
                            type="password" 
                            name="password"
                            placeholder="PASSWORD"
                            value={this.state.password}
                            onChange={this.handleChange}
                            />
                    </div>

                    <button className="btn" type="submit">ENTER</button>


                </form>
            </div>
        );
    }
}