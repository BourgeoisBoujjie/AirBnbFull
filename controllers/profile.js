// imported packages
const express = require('express')
const res = require('express/lib/response')
const router = express.Router()


// controller
router.get('/', (req, res) =>{
    // res.render('profile')
    res.send('hello from profile')
})

// export
module.exports = router