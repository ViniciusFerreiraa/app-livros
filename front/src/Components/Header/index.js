import React,  { Component } from 'react';
import "./styles.css";


export default class Header extends Component {
    state = {
        user: [],
    };

    async componentDidMount() {
        // const response = await api.get(`/user/${id}`);
        // this.setState({ product: response.data });
    }

    logout() {
        console.log('alugar livro');
    }

    render() {
        return (
            <header id="header">
                <h1 className="title">App Livros - Vinícius Ferreira</h1>
                <div className="user-infos">
                    <span className="text">User: Name</span>
                    <button className="btn" onClick="logout">Logout</button>
                </div>
            </header>
        )
    }
}