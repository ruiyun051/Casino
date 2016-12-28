var RedisStore = require('./RedisStore');
var Prize = require('../utils/Prize');

var PrizeService = {
	getStore(callback){
		RedisStore.connect();
		RedisStore.get('casino_store').then(function(res){
			
			var json = res;
			try{
				json = JSON.parse(res);
			}catch(e){}

			callback(null , json);
		}).finally(function(){
			RedisStore.quit();
		});
	},
	setStore(store , callback){
		RedisStore.connect();
		RedisStore.set('casino_store' , store).then(function(data){	
			callback(data);
		}).finally(function(){
			RedisStore.quit();
		});
	},
	addStore(member , callback){
		var self = this;
		RedisStore.connect();

		RedisStore.get('casino_store').then(function(data){
			try{
				data = JSON.parse(data);
			}catch(e){

			}

			var members = data.members;
			if(members.indexOf(member) >= 0){
				callback({
					success: false
				});
			}else{
				members.push(member);
				RedisStore.set('casino_store' , data).then(function(data){
					console.info('==' , data);
					callback({
						success: true
					})
				});
			}
		}).finally(function(){
			RedisStore.quit();
		})
	},
	/**
     * history: {date: 2016-12-28 12:00:00 , rule: {} , members: []}
 	 */
	getPrizedHistories(callback){
		RedisStore.connect();
		RedisStore.get('casino_prized_history').then(function(data){
			try{
				data = JSON.parse(data);
			}catch(e){}
			callback(data);
		}).finally(function(){
			RedisStore.quit();
		});
	},
	getLastPrizedHistory(callback){
		var histories = this.getPrizedHistories(function(histories){
			if(histories && histories.length > 0){
				callback(histories[histories.length - 1]);
			}else{
				callback([]);
			}
			
		});
	},
	setPrizedHistories(hises , callback){
		RedisStore.connect();
		RedisStore.set('casino_prized_history' , hises).then(function(res){
			callback(res)
		}).finally(function(){
			RedisStore.quit();
		});
	},
	addPrizedHistory(his ,callback){
		var histories = this.getPrizedHistories();
		histories.push(his);
		this.setPrizedHistories(histories);
	},
	openPrize(filterable , callback){
		var history = null;
		var client = RedisStore.connect();
		client.multi().get('casino_store').get('casino_prized_history').execAsync().then(function(res){
			var store = JSON.parse(res[0]) , histories = JSON.parse(res[1]);
			var members = store.members;
			if(filterable){
				if(!histories){
					histories = {members:[]};
				}
				histories.map(function(his){
					his.members.map(function(mem){
						var i = members.indexOf(mem);
						console.info("i" , i , mem);
						if(i >= 0){
							members.splice(i , 1);
						}
					})
				})

				console.info(histories);

				var prized = Prize.random({
					members: members,
					rule: store.rule
				});
				history = {
					date: new Date(),
					rule: store.rule,
					members: prized
				};
				histories.push(history);
				return RedisStore.set('casino_prized_history' , histories);
			}
		}).then(function(e){
			console.info("--" , arguments);
		}).finally(function(){
			RedisStore.quit();
			callback(history);
		});
	}
}

module.exports = PrizeService;