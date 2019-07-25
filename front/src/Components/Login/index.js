import React from 'react';
import './styles.css';

const Login = () => (
  <form action="" className="login">
    <span className="title">Login</span>
    <input type="email" id="input-email" name="email" placeholder="Seu email" value="" />
    <input type="password" id="input-pass" name="pass" placeholder="Sua senha" value="" />
    <input type="submit" className="btn submit" value="Entrar" />
  </form>
)


export default Login;