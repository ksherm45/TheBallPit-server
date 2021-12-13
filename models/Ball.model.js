const { Schema, model } = require("mongoose");
require('./Comment.model')


const ballSchema = new Schema(
    {
        name: String,
        description: String,
        image: String,
        id: {
            type: Schema.Types.ObjectId,
            ref: "CommentModel"
        }

})

const BallModel = model("Ball", ballSchema);

module.exports = BallModel