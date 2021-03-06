var express = require('express');
var router = express.Router();

var services_controller = require('../controllers/servicesController');
var booking_controller = require('../controllers/bookingController');


/* GET services listing. * /
router.get('/', function(req, res, next) {
  res.send(' devuelve todos los servicios del spa');
});

router.get('/:id', function(req, res, next) {
  res.send(' devuelve todos los servicios del spa por id '+req.params.id);
});*/
router.get('/',services_controller.services_all_get);
router.get('/:id',services_controller.services_detail_get);
router.post('/create/',booking_controller.booking_register);

module.exports = router;
