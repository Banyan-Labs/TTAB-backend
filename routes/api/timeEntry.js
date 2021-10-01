const router = require('express').Router();
const timeController = require('../../controller/timeController');

router.route('/').post(timeController.saveNewTimeEntry)
router.route('/:userId').get(timeController.getAllDaysByUserId)

module.exports = router