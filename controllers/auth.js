// imported packages
const express = require('express')
const { json } = require('express/lib/response')
const res = require('express/lib/response')
const router = express.Router()
const Users = require('../models/users')


// controller GET
router.get('/', (req, res) =>{
    res.render('/auth')
    // res.send('hello from auth')
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/signup', (req, res) => {
    res.render('signup')
})

router.get('/logout', (req, res) => {
    res.render('login')
})

//  controller POST
router.post('/login', (req, res) => {
    res.render('login')
})

router.post('/signup', async (req, res, next) => {
    try{
        console.log(req.body)
        let foundUser = await Users.findOne({
            email: req.body.email,
            if(foundUser){
                throw new Error('This is not the user we are looking for')
            },            
        })
        let user = await Users.create(req.body)
        req.login(user, (err) =>{
            if(err){throw err}
        })
        res.redirect('/houses')
    }catch (err){
        next (err)
    }
})


// export
module.exports = router