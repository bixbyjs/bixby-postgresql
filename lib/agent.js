var pg = require('pg');

function Agent() {
  this._pools = {}
}

Agent.prototype.createConnectionPool = function(options) {
  // TODO: support options as object
  var opts = {};
  if (typeof options == 'string') {
    opts.connectionString = options;
  }
  
  var pool = new pg.Pool(opts)
  // TODO: index by host:port:database
  this._pools['default'] = pool;
  return pool;
};


module.exports = Agent;
