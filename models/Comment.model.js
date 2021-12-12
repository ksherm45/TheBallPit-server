const { Schema, model } = require("mongoose");
const BallModel = require("./Ball.model");


const commentSchema = new Schema(
  {
    username: String,
    sentence: String,
  }
   );
  
  const CommentsModel = model("Comments", commentSchema);

  module.exports = CommentsModel;