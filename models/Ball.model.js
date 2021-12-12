const { Schema, model } = require("mongoose");
const CommentModel = require('./Comment.model')

const ballSchema = new Schema(
    {
        name: String,
        description: String,
        image: String,

})

const BallModel = model("Ball", ballSchema);

module.exports = BallModel