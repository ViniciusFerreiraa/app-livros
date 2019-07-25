import React from 'react';
import './login.css';

const Login = () => (
    <div className="login">
      <input type="email" id="input-email" name="email" placeholder="Seu email" value="" />
      <input type="password" id="input-pass" name="pass" placeholder="Sua senha" value="" />
      <input type="submit" className="btn submit" value="Entrar" />
    </div>
)


export default Login;