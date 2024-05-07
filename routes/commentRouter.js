const express = require('express')
const commentRouter = express.Router()
const Comment = require('../models/comment')



// Get comment request
commentRouter.get('/', (req, res, next) => {
    Comment.find((err, comment) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comment)
    })
})



// Add new comment
commentRouter.post('/:issueId', (req, res, next) => {
   req.body.user = req.auth._id
   req.body.issue = req.params.issueId
   req.body.username = req.auth.username
   const newComment = new Comment(req.body)
   newComment.save((err, comment) => {
    if (err) {
        res.status(500)
        return next(err)
    }
    return res.status(201).send(comment)
   })
})




module.exports = commentRouter