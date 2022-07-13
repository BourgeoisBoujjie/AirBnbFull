// imported packages
const express = require('express')
const res = require('express/lib/response')
const router = express.Router()


// controller
router.get('/', (req, res) =>{
    // res.render('reviews')
    res.send('hello from reviews')
})

router.post('/', (req, res) => {
    res.render('reviews')
})

// export
module.exports = router