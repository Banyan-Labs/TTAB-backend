const router = require('express').Router();
const Time = require('../../TimeData.json');

console.log(Time, "looking at time")

router.route('/')
    .get((req, res) => res.json({ message: 'server connection active' }))


router.route('/test')
    .get((req, res) => res.json({ message: 'test get response successful' }))
    .post((req, res) => res.json({
        message: 'test post response successful',
        body: req.body
    }))


    router.route('/timeData')
    .get((req, res) => res.json({ message: Time }))
    .post((req, res) => res.json({
        message: 'test post response successful',
        body: req.body
    }))

module.exports = router;