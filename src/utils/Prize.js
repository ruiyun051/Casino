var Prize = {
	random: function(conf){
		var members = conf.members.slice() , rule = conf.rule;
		var prized = [];
		for(var i = 0 ; i < rule.numbers ; i ++){
			var j = Math.floor(Math.random() * members.length);
			prized = prized.concat(members.splice(j , 1));
		}
		return prized;
	}
};

module.exports = Prize;