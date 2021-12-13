const { Schema, model } = require("mongoose");
const BallModel = require("./Ball.model");



const commentSchema = new Schema(
  {
    comment: String,
   
  }
   );
  
  const CommentsModel = model("Comments", commentSchema);

  module.exports = CommentsModel;