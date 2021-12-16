const express = require('express')
const router = express.Router()
const BallModel = require('../models/Ball.model')
const CommentModel = require('../models/Comment.model')

// NOTE: All your API routes will start from /api
// will handle all GET requests to http:localhost:5005/api/balls
router.get('/homepage', (req, res) => {
     BallModel.find()
     .populate('id')
          .then((response) => {                             //talk to josh
               res.status(200).json(response)               //talk to josh
          })
          .catch((err) => {
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          })
})


// will handle all POST requests to http:localhost:5005/api/create
router.post('/create', (req, res) => {
    const {name, description} = req.body;
    console.log(req.body)
    BallModel.create({name, description})
          .then((response) => {
               res.status(200).json(response)
          })
          .catch((err) => {
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          })
})

router.post('/comment', (req, res) => {
     const {comment} = req.body;
     console.log(req.body)
     CommentModel.create({comment})
           .then((response) => {
                res.status(200).json(response)
           })
           .catch((err) => {
                res.status(500).json({
                     error: 'Something went wrong',
                     message: err
                })
           })
 })
// will handle all GET requests to http:localhost:5005/api/balls/:ballId
//PS: Don’t type :todoId , it’s something dynamic,
router.get('/ball/:ballId', (req, res) => {
    BallModel.findById(req.params.ballId)
     .then((response) => {
          res.status(200).json(response)
     })
     .catch((err) => {
          res.status(500).json({
               error: 'Something went wrong',
               message: err
          })
     })
})
// will handle all DELETE requests to http:localhost:5005/api/ball/:id
router.delete('/ball/:id', (req, res) => {
     const id = req.params.id
     console.log('made it to server')
     console.log(id)
    BallModel.findByIdAndDelete(req.params.id)
          .then((response) => {
               res.status(200).json(response)
          })
          .catch((err) => {
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          })
})
// will handle all PATCH requests to http:localhost:5005/api/ball/:id
router.patch('/ball/:id', (req, res) => {
    let id = req.params.id
    const {name, description, completed} = req.body;
    BallModel.findByIdAndUpdate(id, {$set: {name: name, description: description, completed: completed}}, {new: true})
          .then((response) => {
               res.status(200).json(response)
          })
          .catch((err) => {
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          })
})


 
module.exports = router;