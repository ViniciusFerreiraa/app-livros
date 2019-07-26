import React,  { Component } from 'react';
import api from '../../Services/api';
import { Link } from "react-router-dom";

export default class Book extends Component {
    state = {
        product: [],
    };

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/books/${id}`);

        this.setState({ product: response.data });
    }

    rent() {
        console.log('alugar livro');
    }

    render() {
        const { product } = this.state;
        const isRented = product.rented;
        let rentBook;

        console.log(isRented);
        if ( isRented ) {
            rentBook = <span className="text-highlight">This book has been rented</span>
        } else {
            rentBook = <button onClick={this.rent} className="btn">Alugar</button>;
        }

        return (
            <div className="book-info">
                <strong className="title-highlight"> Book Details: </strong>
                <div className="box">
                    <h1 className="title">{product.title}</h1>
                    <p className="text">{product.description}</p>
                    {rentBook}
                </div>
                
                <div className="actions">
                    <Link to={'/'} className="btn link">Back to list</Link>
                </div>
            </div>
        )
    }
}