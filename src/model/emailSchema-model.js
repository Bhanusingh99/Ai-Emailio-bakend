import mongoose from "mongoose";

const emailSchema = new mongoose.Schema(
  {
    sender: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^\S+@\S+\.\S+$/.test(v); // Simple email validation regex
        },
        message: (props) => `${props.value} is not a valid email!`,
      },
    },
    recipient: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^\S+@\S+\.\S+$/.test(v); // Simple email validation regex
        },
        message: (props) => `${props.value} is not a valid email!`,
      },
    },
    subject: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
    },
  },
  {
    timestamps: true, // Add timestamps to track creation and update times
  }
);

const Email = mongoose.model("Email", emailSchema);

export default Email;
