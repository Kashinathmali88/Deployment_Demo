import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
});

const UserModel =
  mongoose.model.UserModel || mongoose.model("UserModel", userSchema);

export default UserModel;
