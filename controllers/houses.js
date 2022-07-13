// imported packages
const express = require('express')
const res = require('express/lib/response')
const router = express.Router()


// controller GET
router.get('/', (req, res) =>{
    // res.render('houses')
    res.send('hello from houses')
})

router.get('/create', (req, res) =>{
    res.render('/houses/create')
})

router.get('/:id', (req, res) =>{
    res.render('/houses/one')
})

router.get('/:id/edit', (req, res) =>{
    res.render('/houses/edit')
})

// controller POST/PATCH/DELETE
router.post('/', (req, res) =>{
    res.render('/houses')
})

router.patch('/:id', (req, res) =>{
    res.render('/houses/one')
})

router.delete('/:id', (req, res) =>{
    res.send('/houses')
})

// export
module.exports = router