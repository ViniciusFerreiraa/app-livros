import React,  { Component } from 'react';
import api from '../../Services/api'
import { Link, withRouter  } from "react-router-dom";
import { authLogin } from "../../Services/auth";

class Login extends Component {
    state = {
        email: "",
        password: "",
        error: ""
    };

    handleLogin = async e => {
        e.preventDefault();
        const { email, password } = this.state;

        if (!email || !password) {
            this.setState({ error: " Fill in email and password to continue!" });
        } else {
            try {
                // const response = await api.post("/sessions", { email, password });
                // authLogin(response.data.token);

                //GAMBIA - DESCOBRICONHECI O ANDOINSJS, MAS NÃO TIVE TEMPO DE APLICAR
                authLogin("O6JhdWeOFl");
                
                this.props.history.push("/books");
            } catch (err) {
                this.setState({
                    error:
                        "There was a problem with login, please check your credentials."
                });
            }
        }
    };
    
    render() {
        return(
            <div className="box-full">
                <div className="box">
                    <form onSubmit={this.handleLogin} className="login">
                        <span className="title">Login</span>
                        
                        {this.state.error && <p className="error">{this.state.error}</p>}
                        <input
                            type="email"
                            placeholder="Endereço de e-mail"
                            onChange={e => this.setState({ email: e.target.value })}
                        />
                        <input
                            type="password"
                            placeholder="Senha"
                            onChange={e => this.setState({ password: e.target.value })}
                        />
                        <button type="submit" className="btn submit">Login</button>
                        <br />
                        <br />
                        <hr />
                        <br />
                        <br />
                        <Link to="/Signup" className="btn link">Create an account</Link>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(Login);