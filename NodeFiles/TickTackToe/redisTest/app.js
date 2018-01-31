var redis = require('redis');
var client = redis.createClient();

client.on('connect', function() {
    // console.log('connected');
});

// client.set('framework', 'AngularJS');
// client.set('framework', 'AngularJS', function(err, reply) {
//   // console.log(reply);
// });

// client.get('framework', function(err, reply) {
//     // console.log(reply);
// });

// client.hmset('test', 'javascript', 'AngularJS', 'css', 'Bootstrap', 'node', 'Express');


client.del('frameworksObj', function(err, reply) {
    // console.log(reply);
});
// client.del('frameworks', function(err, reply) {
//     // console.log(reply);
// });
// client.del('tags', function(err, reply) {
//     // console.log(reply);
// });
// client.del('key1', function(err, reply) {
//     // console.log(reply);
// });
// client.hmset('frameworksObj', 'test123', JSON.stringify({
//     'javascript': 'AngularJS',
//     'css': 'Bootstrap',
//     'node': 'Express'
// }), 'test234', JSON.stringify({
//     'test': 'test1'
// }));
//     client.hdel('frameworksObj','test123');
//     client.hgetall('frameworksObj', function(err, object) {
//         console.log(object);
//     });
// client.rpush(['frameworks', 'angularjs', 'backbone']);

// client.lrange('frameworks', 0, -1, function(err, reply) {
//     console.log(reply); // ['angularjs', 'backbone']
// });

// client.sadd(['tags', 'angularjs', 'backbonejs', 'emberjs'], function(err, reply) {
//     // console.log(reply); // 3
// });

// client.smembers('tags', function(err, reply) {
//     console.log(reply);
// });

// client.exists('key', function(err, reply) {
//     if (reply === 1) {
//         console.log('exists');
//     } else {
//         console.log('doesn\'t exist');
//     }
// });

// client.set('key1', "10", function() {
//     client.incr('key1', function(err, reply) {
//         console.log(reply); // 11
//     });
// });
// client.quit();
// 

var keepAliveObj = {
    "auction_id": "220",
    "lane_id": "65",
    "last_updated_timestamp": null,
    "auction_ended": 0,
    "current_product": {
        "current_product_counter": 55,
        "product_tim e_interval": 1000,
        "current_product_index": 0
    },
    "bid_interval": 30,
    "winner_bid_data": {

    },
    "next_product": {
        "next_product_index": 0,
        "next_product_validation": true
    }
};
var deadObj ={
  "auction_id": 220,
  "lane_id": 65,
  "last_updated_timestamp": null,
  "current_product": {
    "current_product_counter": 55,
    "product_time_interval": 1000,
    "current_product_index": 0
  },
  "bid_interval": 30,
  "winner_bid_data": {},
  "next_product": {
    "next_product_index ": 0,
    "next_product_validation": true
  },
  "auction_name": "DT Dont Edit",
  "lane_name": "L ane A",
  "port": 8182,
  "runtime_script": "node app.js 8182 220 65 0"
};
// client.hmset('keep_alive', 'kee_alive_65', JSON.stringify(keepAliveObj))
client.del('not_alive_log', function(err, reply) {
    // console.log(reply);
});
client.hmset('not_alive_log', 'not_alive_log_65', JSON.stringify(deadObj))
client.hgetall('not_alive_log', function(err, reply) {
    console.log(reply);
});