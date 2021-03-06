/*
var utility = require('../utility');
var queueReq = utility.queueReq;
var queue = require('../queue');
queueReq(queue, "fullhistory", {
    account_id: 64997477
}, {
    attempts: 1
}, function(err, job) {
    process.exit(Number(err));
});
var redis = require('./redis');
console.log(redis.get("player:88367253"));
console.log(redis.ttl("player:88367253", function(err, res) {
    console.log(err, res);
}));
*/
/*
var cassandra = require('../cassandra');
cassandra.execute('SELECT TTL(cache) FROM player_caches WHERE account_id = ?', [88367253], function(err, res)
{
    console.log(res);
});
*/
var input = require('../output2.json');
var sizes = {};
input.players.forEach(function(p)
{
    for (var key in p)
    {
        var l = JSON.stringify(p[key]).length;
        sizes[key] = sizes[key] ? sizes[key] + l : l;
    }
});
for (var key in input){
    sizes[key] = JSON.stringify(input[key]).length;
}
console.log(sizes);