// imported packages
const express = require('express')
const res = require('express/lib/response')
const router = express.Router()


// controller GET
router.get('/', (req, res) =>{
    res.render('houses/list')
    // res.send('hello from houses')
})

router.get('/create', (req, res) =>{
    res.render('houses/create')
})

router.get('/:id', (req, res) =>{
    res.render('houses/one')
})

router.get('/:id/edit', (req, res) =>{
    res.render('houses/edit')
})

// controller POST/PATCH/DELETE
router.post('/', (req, res) =>{
    
})

router.patch('/:id', (req, res) =>{
    
})

router.delete('/:id', (req, res) =>{

})

// export
module.exports = router