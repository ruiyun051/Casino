export default {
	random: function(conf){
		var members = conf.members.slice() , rules = conf.rules;
		var prized = [];
		for(var k in rules){
			var rule = rules[k];
			prized.push({
				name: rule.name, members: []
			})
			for(var i = 0 ; i < rule.numbers ; i ++){
				var j = Math.floor(Math.random() * members.length);
				prized[prized.length - 1].members.push(members.splice(j , 1));
			}
		}
		console.info(prized);
		return prized;
	}
};