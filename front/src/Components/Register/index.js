import React from 'react';
import './styles.css';

const Register = () => (
  <form action="" className="register">
    <span className="title">Register</span>
    <input type="email" id="input-email" name="email" placeholder="Seu email" value="" />
    <input type="password" id="input-pass" name="pass" placeholder="Sua senha" value="" />
    <input type="submit" className="btn submit" value="Cadastrar" />
  </form>
)

export default Register;