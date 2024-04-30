var Agent = require('../lib/agent');

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
