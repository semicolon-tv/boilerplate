const fs = require('fs');

module.exports = {
  devServer: {
    https: {
      key: fs.readFileSync('./certs/localhost+2-key.pem'),
      cert: fs.readFileSync('./certs/localhost+2.pem'),
    },
    public: 'https://localhost:8080',
  },
};
