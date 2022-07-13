// imported packages
const express = require('express')
const res = require('express/lib/response')
const router = express.Router()


// controller
router.post('/', (req, res) => {
    res.render('houses/one')
})

// export
module.exports = router