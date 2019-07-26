const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const User = mongoose.model('User');

function generateToken(email, password) {
  var u = {
    email,
    password
  };

  // return token = jwt.sign(u, process.env.JWT_SECRET, {
  //   expiresIn: 60 * 60 * 24 // expires in 24 hours
  // });

  return token = 'O6JhdWeOFl';
}


module.exports = {
  async create ( res ) {
    const { email, password } = res.body;
    
    const token = await generateToken(email, password);
    console.log(token);

    return token;
  }
}