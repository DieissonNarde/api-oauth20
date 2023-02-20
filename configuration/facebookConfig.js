require('dotenv').config();

module.exports = {
  api_key: process.env.FB_API_KEY,
  api_secret: process.env.FB_SECRET_KEY,
  callback_url: 'http://localhost:3000/oauth2/redirect/facebook',
};
