var express = require('express'),
	router = express.Router();

router.get('/', function (req, res) {
	res.render('admin.jade');
});

router.post('/', function (req, res) {
	console.log('post');
	console.log(req.body);
	res.sendStatus(200);
});

router.put('/', function (req, res) {
	console.log('put');
	console.log(req.body);
	res.sendStatus(200);
});

router.use('/artists', require('./artists'));
router.use('/employees', require('./employees'));

module.exports = router;