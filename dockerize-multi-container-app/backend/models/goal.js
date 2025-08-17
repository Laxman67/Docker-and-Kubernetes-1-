import mongoose from "mongoose";

const goalSchema = new mongoose.Schema({
  text: String,
});

const Goal = mongoose.model("Goal", goalSchema);

export default Goal;
