/**
 * Postgres.
 */
exports = module.exports = function(keyring) {
  var redis = require('redis');
  
  
  var API = {};
  
  API.connect =
  API.createConnection = function(options, connectListener) {
    var client = redis.createClient(options.port, options.address || options.name);
    if (connectListener) { client.once('connect', connectListener); }
    
    // TODO: Handle initial errors somehow...
    
    if (keyring) {
      keyring.get(options.name, function(err, cred) {
        // TODO: Error handling
        client.auth(cred.password);
      });
    }
    
    return client;
  };
  
  return API;
};

exports['@singleton'] = true;
exports['@implements'] = 'http://i.bixbyjs.org/redis';
exports['@require'] = [
  'http://i.bixbyjs.org/security/Keyring?'
];
