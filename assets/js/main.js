const Dotenv = require('dotenv-webpack');

module.exports = {
  // other configuration options
  plugins: [
    new Dotenv()
  ]
};
const apiKey = process.env.API_KEY;
