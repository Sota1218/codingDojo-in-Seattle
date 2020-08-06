const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    rate: { type: Number, required: true },
    comment: { type: String, default: "" }
  },
  { timestamps: true }
);

const CakeSchema = new mongoose.Schema(
  {
    baker_name: { type: String, required: true },
    image: { type: String, default: "" },
    completed: { type: Boolean, default: false },
    comment: [CommentSchema]
  },
  { timestamps: true }
);

const Cake = mongoose.model("Cake", CakeSchema);
const Comment = mongoose.model("Comment", CommentSchema);

module.exports = { Cake, Comment };
