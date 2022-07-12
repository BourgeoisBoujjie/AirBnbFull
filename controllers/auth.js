// imported packages
const express = require('express')
const res = require('express/lib/response')
const router = express.Router()


// controller GET
router.get('/', (req, res) =>{
    res.render('auth')
    // res.send('hello from auth')
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/signup', (req, res) => {
    res.render('signup')
})

router.get('/logout', (req, res) => {
    res.render('houses')
})

//  controller POST
router.post('/login', (req, res) => {
    res.render('login')
})

router.post('/signup', async (req, res) => {
    try{
        console.log(req.body)
        let foundUser = await URLSearchParams.findOne({
            email: req.body.email,
            if(foundUser){
                throw new Error('This is not the user we are looking for Trooper')
            },
            
        })
        let user = await Usersers.create(req.body)
        req.login(req.body.user)
    }catch{
        throw err
    }
    res.redirect('/houses')
})


// export
module.exports = router