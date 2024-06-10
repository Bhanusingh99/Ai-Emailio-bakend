import mongoose from "mongoose";

const accessTokenSchema = new mongoose.Schema({
  accessToken: {
    type: String, // Corrected from "Types" to "type"
    required: true,
  },
});

const UserAccessToken = mongoose.model("access-token", accessTokenSchema); // Corrected model name to start with uppercase

export default UserAccessToken; // Corrected model name to start with uppercase
