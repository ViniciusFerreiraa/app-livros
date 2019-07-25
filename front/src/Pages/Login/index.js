import React,  { Component } from 'react';
import api from '../../Services/api'

import Login from '../../Components/Login'
import Register from '../../Components/Register'

export default class Main extends Component {
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/user');

        console.log(response.data.docs);
    }

    render() {
        return(
            <div className="box-full">
                <div className="box">
                    <Login />
                    <Register />
                </div>
            </div>
        )
    }
}