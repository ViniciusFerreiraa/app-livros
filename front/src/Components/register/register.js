import React from 'react';
import './register.css';

const Register = () => (
    <div className="register">
      <input type="email" id="input-email" name="email" placeholder="Seu email" value="" />
      <input type="password" id="input-pass" name="pass" placeholder="Sua senha" value="" />
      <input type="submit" className="btn submit" value="cadastrar" />
    </div>
)


export default Register;