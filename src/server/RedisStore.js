var redis = require('redis');
var bluebird = require('bluebird');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

var RedisStore = {
	client: null,
	connect(){
		this.client = redis.createClient(6379 , '121.40.203.56' ,{});
		this.client.on('error' , function(err){
			console.error(err);
		})
		return this.client;
	},
	set(key , value ,callback ){
		return this.client.setAsync(key , JSON.stringify(value));
	},
	get(key){
		return this.client.getAsync(key);
	},
	quit(){
		if(this.client)
			this.client.quit();
	}
}

module.exports = RedisStore;