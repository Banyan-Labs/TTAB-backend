const router = require('express').Router();

router.route('/')
    .get((req, res) => res.json({ message: 'server connection active' }))


router.route('/test')
    .get((req, res) => res.json({ message: 'test get response successful' }))
    .post((req, res) => res.json({
        message: 'test post response successful',
        body: req.body
    }))


    router.route('/test/timeData/:userId')
    .get((req, res) => {
        const Time = require('../../TimeData.json');
        const { userId } = req.params;

        const userTimeEntries = Time.filter((entry) => entry.userId == userId)

        return res.json({ timeEntries: userTimeEntries.length })
    })

module.exports = router;