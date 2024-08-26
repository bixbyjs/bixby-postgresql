var Agent = require('../lib/agent');

// https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING

/**
 * Postgres.
 */
exports = module.exports = function(keyring) {
  var agent = new Agent();
  return agent;
};

exports['@singleton'] = true;
exports['@implements'] = 'module:bixby-postgresql';
exports['@require'] = [
];
