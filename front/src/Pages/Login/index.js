import React,  { Component } from 'react';
import api from '../../Services/api'
import { Redirect } from "react-router-dom";

export default class Main extends Component {
    state = {
        users: [],
        usersInfos: {},
        page: 1,
        isLogin: false
    };
    
    componentDidMount() {
        this.loadUsers();
    }

    loadUsers = async () => {
        const response = await api.get('/users');

        const { docs, ...usersInfos } = response.data;

        this.setState({ users: docs, usersInfos });
    }

    login = e => {
        e.preventDefault();
        alert("Eu vou logar");
        const user = "dev";
        this.setState({isLogin: true});

        localStorage.setItem('user', JSON.stringify(user));
        return <Redirect to='/' />
    }
    
    render() {

        return(
            <div className="box-full">
                <div className="box">
                    <form className="login" onSubmit={this.login}>
                        <span className="title">Login</span>
                        <input type="email" id="input-email" name="email" placeholder="Seu email" value="" />
                        <input type="password" id="input-pass" name="pass" placeholder="Sua senha" value="" />
                        <input type="submit" className="btn submit" value="Entrar" />
                    </form>

                    <form action="" className="register">
                        <span className="title">Register</span>
                        <input type="email" id="input-email" name="email" placeholder="Seu email" value="" />
                        <input type="password" id="input-pass" name="pass" placeholder="Sua senha" value="" />
                        <input type="submit" className="btn submit" value="Cadastrar" />
                    </form>
                </div>
            </div>
        )
    }
}