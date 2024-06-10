import UserAccessToken from "../model/accessToken.model.js"; // Assuming the correct path to your model file
import Email from "../model/emailSchema-model.js";

const saveOrUpdateEmails = async (req, res) => {
  try {
    // Extract emails array and accessToken from request body
    const { emails, accessToken } = req.body;

    // Check if emails array and accessToken are provided
    if (!emails || !Array.isArray(emails) || !accessToken) {
      return res.status(400).json({ message: "Invalid request body" });
    }

    // Delete all existing emails and access token from the database
    await Email.deleteMany({});
    await UserAccessToken.deleteMany({});

    // Save access token to the database
    const userToken = new UserAccessToken({ accessToken });
    await userToken.save();

    // Iterate through each email in the array
    for (const email of emails) {
      // Provide default value for body if missing
      if (!email.body) {
        email.body = "";
      }

      // Extract email properties
      const { sender, recipient, subject, snippet, body } = email;

      // Find existing email based on sender, recipient, and subject
      const existingEmail = await Email.findOneAndUpdate(
        { sender, recipient, subject },
        { body }, // Update the body of the email
        { upsert: true, new: true } // Create new document if not found, and return updated document
      );
    }

    return res
      .status(200)
      .json({ message: "Emails saved or updated successfully" });
  } catch (error) {
    console.error("Error saving or updating emails:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default saveOrUpdateEmails;
