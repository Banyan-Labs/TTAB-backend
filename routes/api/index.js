const router = require('express').Router();
const Time = require('../../TimeData.json');

router.route('/')
    .get((req, res) => res.json({ message: 'server connection active' }))


router.route('/test')
    .get((req, res) => res.json({ message: 'test get response successful' }))
    .post((req, res) => res.json({
        message: 'test post response successful',
        body: req.body
    }))


    router.route('/timeData')
    .get((req, res) => res.json({ userTimeEntry: Time }))

module.exports = router;