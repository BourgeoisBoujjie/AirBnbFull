// imported packages
const express = require('express')
const res = require('express/lib/response')
const router = express.Router()


// controller
router.get('/', (req, res) =>{
    // res.render('houses')
    res.send('hello from houses')
})

// export
module.exports = router