import React,  { Component } from 'react';
import { logout } from "../../Services/auth";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../../Services/auth";

export default class Header extends Component {
    state = {
        user: [],
    };

    async componentDidMount() {
    }

    remotokenkey() {
        logout();
    }

    render() {
        let logout;

        if (isAuthenticated() ) {
            logout = <Link to={`/`} className="btn" onClick={this.remotokenkey}>Logout</Link>;
        } else {
            logout = ""
        }
        return (
            <header id="header">
                <h1 className="title">App Livros - Vinícius Ferreira</h1>
                <div className="user-infos">                
                    <Link to={`/admin`} className="btn">Manager</Link>
                    {logout}
                </div>
            </header>
        )
    }
}