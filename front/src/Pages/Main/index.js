import React,  { Component } from 'react';
import api from '../../Services/api';
import { Link } from "react-router-dom";

export default class Main extends Component {
    state = {
        products: [],
        productInfos: {},
        page: 1,
    };
    
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/books?page=${page}`);

        const { docs, ...productInfos } = response.data;

        this.setState({ products: docs, productInfos });
    }

    prevPage = () => {
        const { page, productInfos } = this.state;
        
        if (page === 1) return;
        
        const pageNumber = page - 1;
        this.setState({page: pageNumber});
        this.loadProducts(pageNumber);
    }

    nextPage = () => {
        const { page, productInfos } = this.state;
        
        if (page === productInfos.pages) return;
        
        const pageNumber = page + 1;
        this.setState({page: pageNumber});
        this.loadProducts(pageNumber);
    }

    render() {        
        const { products } = this.state;

        return(
            <div className="books">
                <span className="text-heighlight">Total Books: {this.state.productInfos.total} </span>
                <div className="books-list">
                    {products.map(product => (
                        <div key={product._id} className="box">
                            <article>
                                <strong className="title">{product.title}</strong>
                                <p className="text">{product.description}</p>
                                <Link to={`/book/${product._id}`} className="btn">Detalhes</Link>
                            </article>
                        </div>
                    ))}
                </div>

                <div className="actions">
                    <button disabled={ this.state.page === 1 } onClick={this.prevPage} className="btn">Prev page</button>
                    <button disabled={ this.state.page === this.state.productInfos.pages} onClick={this.nextPage} className="btn">Next page</button>
                </div>
            </div>
        )
    }
}