const router = require('express').Router();

router.route('/')
    .get((req, res) => res.json({ message: 'server connection active' }))


router.route('/test')
    .get((req, res) => res.json({ message: 'test get response successful' }))
    .post((req, res) => res.json({
        message: 'test post response successful',
        body: req.body
    }))
    router.route('/SignIn')
    .get((req, res) => res.json({ message: 'test get response successful' }))
    .post((req, res) => {
        return res.json(`${req.body.emailAddress}`)
    })


module.exports = router;