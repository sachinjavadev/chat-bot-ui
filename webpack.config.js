const path = require('path');

module.exports = {
  resolve: {
    alias: {
      global: path.resolve(__dirname, 'node_modules/global/')
    }
  },
  node: {
    global: true
  }
};
