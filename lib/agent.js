var pg = require('pg');

function Agent() {
  this._pools = {}
}

Agent.prototype.createConnectionPool = function(options) {
  console.log('## Agent#createConnectionPool');
  console.log(options);
  
  
  var pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })
  
  // TODO: index by host:port:database
  this._pools['default'] = pool;
  
  return pool;
  
  //cb(null, pool);
};


module.exports = Agent;
