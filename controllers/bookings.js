// imported packages
const express = require('express')
const res = require('express/lib/response')
const router = express.Router()


// controller
router.get('/', (req, res) =>{
    // res.render('bookings')
    res.send('hello from bookings')
})

// export
module.exports = router