const express = require('express')
const { nextTick } = require('process')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send("user List")
})
router.get('/new', (req,res)=>{
    res.send("User New Form")
})
router.post('/new', (req,res)=>{
    res.send("create user")
})
 
router.route('/:id').get((req,res)=>{
    console.log(req.user)
    res.send(`Get User with ID ${req.params.id}`)
}).delete((req,res)=>{
    console.log(req.user)
    res.send(`Delete User with ID ${req.params.id}`)
}).put((req,res)=>{
    console.log(req.user)
    res.send(`Put User with ID ${req.params.id}`)
})
const users = [{name:"kayle"},{name:"Salyl"}]
router.param("id", (req,res,next,id)=>{
    console.log(id)
    req.user=users[id]
    next()
})

module.exports = router