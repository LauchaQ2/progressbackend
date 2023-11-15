const connection = require('./connection.js');
const { queries } = require('./queries.js');

module.exports = {
  ...connection,
  queries
};
