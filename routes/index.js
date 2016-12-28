var express = require('express');
var PrizeService = require('../src/server/PrizeService');
var router = express.Router();
/*
var data ={
	members: ['刘瑞云','张灿茂','游柏浩','吴胤旭','Mark','黄舟舟','王坤','朱嘉伟','张嘉建','杜佳鹏'],
	rule: {
		name: '一等奖', numbers: 1 , prize: '100块' 
	}
}; */

/* GET home page. */
router.get('/', function(req, res) {
  res.render('register');
});

router.get('/not-simple' , function(req , res){
	res.render('index');
});

router.get('/api/store/get' , function(req , res){
	PrizeService.getStore(function(err , data){
		res.json(data);
	});
});
router.post('/api/store/set' , function(req ,res){

	PrizeService.setStore(req.body , function(data){
		res.json({
			success: true
		})
	})
	
})

router.post('/api/store/add' , function(req ,res){

	PrizeService.addStore(req.body.name , function(data){
		res.json(data);
	})
})

router.get('/api/prized/get' , function(req , res){
	PrizeService.getLastPrizedHistory(function(data){
		res.json(data);
	})
})

router.get('/api/prize/open' , function(req , res){
	PrizeService.openPrize(true ,function(data){
		res.json(data);
	});
})

router.get('/api/prized/history/get'  ,function(req ,res){
	PrizeService.getPrizedHistories(function(data){
		res.json(data);
	})
})

router.post('/api/prized/history/set' , function(req ,res){
	PrizeService.setPrizedHistories(req.body , function(data){
			res.json({
			success:true
		})
	})
})

module.exports = router;