// imported packages
const express = require('express')
const res = require('express/lib/response')
const router = express.Router()


// controller GET
router.get('/', (req, res) =>{
    // res.render('profile')
    res.send('hello from profile')
})

router.patch('/', (req, res) =>{
    //patch body
    res.render('profile')
})

// export
module.exports = router