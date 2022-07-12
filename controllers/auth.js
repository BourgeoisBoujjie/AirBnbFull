// imported packages
const express = require('express')
const res = require('express/lib/response')
const router = express.Router()


// controller
router.get('/', (req, res) =>{
    // res.render('auth')
    res.send('hello from auth')
})

// export
module.exports = router